import { connect } from 'react-redux';
import { goAdmin, goUser } from '../actions/index';
import Navbar from '../components/Navbar';

const mapDispatchToProps = dispatch => ({
  goAdmin: () => dispatch(goAdmin()),
  goUser: () => dispatch(goUser()),
});

export default connect(null, mapDispatchToProps)(Navbar);
