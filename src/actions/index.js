import { getUserMarker, setUserMessage } from '../utils/index';

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

export function registerUserMessage(username, message, position) {
  return dispatch => (async () => {
    const response = await setUserMessage(username, message, position);
    if (response === 'success') {
      dispatch(registerSuccess());
      return;
    }
    dispatch(registerFail(response));
  })();
}

export function writeHelpMessage(message) {
  return {
    type: 'WRITE_MESSAGE',
    message,
  };
}

export function goAdmin() {
  return { type: 'GO_ADMIN' };
}

export function goUser() {
  return { type: 'GO_USER' };
}
