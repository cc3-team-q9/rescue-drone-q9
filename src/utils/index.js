const locationUri = '/api/messages';

function getPositionSuccess(pos) {
  const crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);

  const locationData = {
    lng: +crd.latitude,
    lat: +crd.longitude,
  };

  return locationData;
}

function getPositionError(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export async function getUserMarker() {
  const userLocation = navigator.geolocation
    .getCurrentPosition(getPositionSuccess, getPositionError);

  if (userLocation) {
    return userLocation;
  }

  return {
    lng: 139.7515992,
    lat: 35.6580681,
  };
}

export async function setUserMessage(username, message, position) {
  const postData = {
    username,
    message,
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
