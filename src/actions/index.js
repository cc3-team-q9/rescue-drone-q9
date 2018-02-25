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
    console.log('ccccccc');
    const userLocation = await getUserMarker();
    dispatch(getMarkerSuccess(userLocation));
  })();
}

export function registerUserMessage(username, message, position) {
  console.log(username);
  console.log(message);
  console.log(position);
  return dispatch => (async () => {
    console.log('aaaaaaaaaaaaaaaa');
    const response = await setUserMessage(username, message, position);
    if (response === 'success') {
      dispatch(registerSuccess());
      return;
    }
    dispatch(registerFail(response));
  });
}

export function writeHelpMessage(message) {
  return {
    type: 'WRITE_MESSAGE',
    message,
  };
}
