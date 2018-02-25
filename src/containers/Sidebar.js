import { connect } from 'react-redux';
import { getUserLocation, registerUserLocation } from '../actions/index';
import Sidebar from '../components/Sidebar';

const mapDispatchToProps = dispatch => ({
  // registerUserLocation: () => dispatch(registerUserLocation()),
  getUserLocation: () => dispatch(getUserLocation()),
});

export default connect(null, mapDispatchToProps)(Sidebar);
