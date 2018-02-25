import { connect } from 'react-redux';
import Map from '../components/Map';

const mapStateToProps = state => ({
  userLocation: state.userLocation,
});

export default connect(mapStateToProps)(Map);
