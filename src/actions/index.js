import { getUserMarker, setUserMessage, getUserMessages } from '../utils/index';

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

export function goCreateFlightPlan() {
  return { 
    type: 'GO_CREATE_FLIGHT_PLAN', 
  };
}

function getUserMessagesSuccess(userMessages) {
  return {
    type: 'GET_USER_MESSAGES',
    userMessages,
  };
}

function getUserMessagesError(error) {
  return {
    type: 'GET_USER_MESSAGES_ERROR',
    error,
  };
}

export function getEmergencyList() {
  return dispatch => (async () => {
    try {
      const response = await getUserMessages();
      dispatch(getUserMessagesSuccess(response));
    } catch (error) {
      dispatch(getUserMessagesError(error));
    }
  })();
}
