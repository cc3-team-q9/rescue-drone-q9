import { connect } from 'react-redux';
import { getEmergencyList, goCreateFlightPlan } from '../actions/index';
import EmergencyList from '../components/EmergencyList';

const mapStateToProps = state => ({
  userMessages: state.userMessages,
});

const mapDispatchToProps = dispatch => ({
  getEmergencyList: () => dispatch(getEmergencyList()),
  goCreateFlightPlan: (userMessage) => dispatch(goCreateFlightPlan(userMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyList);
