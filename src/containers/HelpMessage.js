import { connect } from 'react-redux';
import { getUserLocation } from '../actions/index';
import HelpMessage from '../components/HelpMessage';

const mapStateToProps = state => ({
  userLocation: state.userLocation,
});

const mapDispatchToProps = dispatch => ({
  // registerUserLocation: () => dispatch(registerUserLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HelpMessage);
