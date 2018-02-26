import { connect } from 'react-redux';
import Map from '../components/Map';
import { viewMarker } from '../actions/index';

const mapStateToProps = state => ({
  userLocation: state.userLocation,
});

export default connect(mapStateToProps)(Map);
