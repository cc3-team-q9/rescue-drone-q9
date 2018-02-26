import { connect } from 'react-redux';
import { getEmergencyList } from '../actions/index';
import EmergencyList from '../components/EmergencyList';

const mapStateToProps = state => ({
  userMessages: state.userMessages,
});

const mapDispatchToProps = dispatch => ({
  getEmergencyList: () => dispatch(getEmergencyList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyList);
