import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 35.681382, lng: 139.76608399999998 }}
  >
    <Marker
      position={{ lat: +props.userMarker.lat, lng: +props.userMarker.lng }}
      defaultAnimation={1}
    />
  </GoogleMap>
)));

class Map extends Component {
  render() {
    return (
      <MyMap
        className='myMap'
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GMAP_KEY}`}
        userMarker={this.props.userLocation.position}
        loadingElement={
          <div style={{ height: '100%' }} />
        }
        mapElement={
          <div style={{ height: '100%' }} />
        }
        containerElement={
          <div style={{ height: '100%' }} />
        }
      />
    );
  }
}

Map.propTypes = {
  userLocation: PropTypes.object.isRequired,
};

export default Map;