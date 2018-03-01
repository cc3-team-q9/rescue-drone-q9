const defaultState = {
  username: 'William',
  userLocation: [],
  helpMsg: '',
  currentView: 'User',
  userMessages: [],
};

const mapReducer = (state = defaultState, action) => {
  switch (action.type) {
  case 'GET_USER_LOCATION': {
    return Object.assign({}, state, {
      userLocation: [{
        position: action.userLocation,
      }],
    });
  }
  case 'WRITE_MESSAGE': {
    return Object.assign({}, state, {
      helpMsg: action.message,
    });
  }
  case 'GO_ADMIN': {
    return Object.assign({}, state, {
      currentView: 'Admin',
    });
  }
  case 'GO_USER': {
    return Object.assign({}, state, {
      currentView: 'User',
      userLocation: [],
    });
  }
  case 'GO_CREATE_FLIGHT_PLAN': {
    return Object.assign({}, state, {
      currentView: 'CreateFlightPlan',
    });
  }
  case 'GET_USER_MESSAGES': {
    return Object.assign({}, state, {
      userMessages: action.userMessages,
    });
  }
  default:
    return state;
  }
};

export default mapReducer;
