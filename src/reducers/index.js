const defaultState = {
  username: 'user1',
  userLocation: {
    position: {
      lat: null,
      lng: null,
    },
  },
  helpMsg: '',
};

const mapReducer = (state = defaultState, action) => {
  switch (action.type) {
  case 'GET_USER_LOCATION': {
    return Object.assign({}, state, {
      userLocation: {
        position: action.userLocation,
      },
    });
  }
  case 'WRITE_MESSAGE': {
    return Object.assign({}, state, {
      helpMsg: action.message,
    });
  }
  default:
    return state;
  }
};

export default mapReducer;
