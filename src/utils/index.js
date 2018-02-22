const locationUri = '/api/user';

export async function getUserMarker() {
  // const locations = await (await fetch(locationUri)).json();
  
  // ---------------- temp
  const locations = {
    longitude: 139.7515992,
    latitude: 35.6580681,
  };
  // -----------------

  const userMarker = {
    position: {
      lat: locations.latitude,
      lng: locations.longitude,
    },
    defaultAnimation: 2,
  };
  return userMarker;
}

export async function setUserLocation() {
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);

    const locationData = {
      lng: +crd.latitude,
      lat: +crd.longitude,
    };

    const response = await (await fetch(locationUri, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(locationData),
      method: 'POST',
    })).json();

    if (response.status >= 400) {
      throw new Error('Failed to register.');
    }

    return 'success';
  }, (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  });
}

export async function setUserMessage(msg) {
  try {
    const response = await (await fetch(locationUri, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msg),
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
