import { getUserMarker, setUserLocation, setUserMessage } from '../utils/index';

function getMarkerSuccess(userLocation) {
  return {
    type: 'GET_USER_LOCATION',
    userLocation,
  };
}

function registerSuccess() {
  return {
    type: 'REGISTERED',
  };
}

function registerFail(error) {
  return {
    type: 'ERROR',
    error,
  };
}

export function getUserLocation() {
  return dispatch => (async () => {
    const userLocation = await getUserMarker();
    dispatch(getMarkerSuccess(userLocation));
  })();
}

export function registerUserLocation() {
  return dispatch => (async () => {
    const response = await setUserLocation();
    if (response === 'success') {
      dispatch(registerSuccess());
      return;
    }
    dispatch(registerFail(response));
  });
}

export function registerUserMessage(userMsg) {
  return dispatch => (async () => {
    const response = await setUserMessage(userMsg);
    if (response === 'success') {
      dispatch(registerSuccess());
      return;
    }
    dispatch(registerFail(response));
  });
}
