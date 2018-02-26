import { connect } from 'react-redux';
import { registerUserMessage, writeHelpMessage } from '../actions/index';
import HelpMessage from '../components/HelpMessage';

const mapStateToProps = state => ({
  username: state.username,
  userLocation: state.userLocation,
  helpMsg: state.helpMsg,
});

const mapDispatchToProps = dispatch => ({
  registerUserMessage: (username, message, position) => {
    dispatch(registerUserMessage(username, message, position));
  },
  writeHelpMessage: (message) => {
    dispatch(writeHelpMessage(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HelpMessage);
