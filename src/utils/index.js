const locationUri = 'api/messages';

function getPositionSuccess(pos) {
  const crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);

  const locationData = {
    lng: +crd.longitude,
    lat: +crd.latitude,
  };

  return locationData;
}

function getPositionError(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export function getUserMarker() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const currentPosition = getPositionSuccess(pos);
        resolve(currentPosition);
      },
      (err) => {
        getPositionError(err);
        reject();
      },
    );
  });
}

export async function setUserMessage(_username, _message, position) {
  const postData = {
    username: _username,
    message: _message,
    longitude: position.lat,
    latitude: position.lng,
  };

  try {
    const response = await (await fetch(locationUri, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
      method: 'POST',
    })).json();

    if (response.status >= 400) {
      throw new Error('Fail to register.');
    }

    return 'success';
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
