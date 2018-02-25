const defaultState = {
  userLocation: {
    position: {
      lat: null,
      lng: null,
    },
  },
  helpMsg: null,
};

const mapReducer = (state = defaultState, action) => {
  switch (action.type) {
  case 'GET_USER_LOCATION': {
    return Object.assign({}, state, {
      userLocation: action.userLocation,
    });
  }
  default:
    return state;
  }
};

export default mapReducer;
