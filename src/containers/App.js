import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  currentView: state.currentView,
});

export default connect(mapStateToProps)(App);
