const locationUri = '/api/messages';

function getPositionSuccess(pos) {
  const crd = pos.coords;

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

export async function setUserMessage(_username, _message, userLocation) {
  const postData = {
    username: _username,
    message: _message,
    longitude: userLocation[0].position.lng,
    latitude: userLocation[0].position.lat,
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

export async function getUserMessages() {
  try {
    const response = await (await fetch(locationUri, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })).json();

    if (response.status >= 400) {
      throw new Error('Fail to get data.');
    }

    return response;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
