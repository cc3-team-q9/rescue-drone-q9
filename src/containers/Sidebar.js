import { connect } from 'react-redux';
import { getUserLocation } from '../actions/index';
import Sidebar from '../components/Sidebar';

const mapDispatchToProps = dispatch => ({
  getUserLocation: () => dispatch(getUserLocation()),
});

export default connect(null, mapDispatchToProps)(Sidebar);
