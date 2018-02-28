import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 35.681382, lng: 139.76608399999998 }}
  >
    {props.markers.map((marker, index) => (
      <Marker
        key={index}
        position={{ lat: +marker.position.lat, lng: +marker.position.lng }}
        animation={1}
      />
    ))}
  </GoogleMap>
)));

const Map = ({ userLocation }) => (
  <MyMap
    className="myMap"
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCbwlqVCEnZdTeR6RbEPHm6xgHySVpimKk"
    markers={userLocation}
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

Map.propTypes = {
  userLocation: PropTypes
    .arrayOf(PropTypes.objectOf(PropTypes.objectOf(PropTypes.number, PropTypes.number))).isRequired,
};

export default Map;
