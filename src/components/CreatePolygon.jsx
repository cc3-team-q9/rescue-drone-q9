import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CreatePolygon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      polygon: [
        { lat: 35.657986, lng: 139.727622 },
      ],
    };
    this.getLatLng = this.getLatLng.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getLatLng(latAndLng, map) {
    const marker = new google.maps.Marker({
      position: latAndLng,
      map,
    });
    map.panTo(latAndLng);
    const copyStatePolygon = this.state.polygon.slice();

    copyStatePolygon.push({
      lat: latAndLng.lat(),
      lng: latAndLng.lng(),
    });

    this.setState({
      polygon: copyStatePolygon,
    });
  }

  componentDidMount() {
    const map = new window.google.maps.Map(ReactDOM.findDOMNode(this.refs.map), {
      center: new window.google.maps.LatLng(35.657986, 139.727622),
      zoom: 12,
      mapTypeId: 'roadmap',
    });
    const basementMarker = new google.maps.Marker({
      position: { lat: 35.657986, lng: 139.727622 },
      map,
      icon: {
        url: 'http://maps.google.co.jp/mapfiles/ms/icons/helicopter.png',
        scaledSize: new google.maps.Size(64, 64),
      },
    });
    const destinationMarker = new google.maps.Marker({
      position: { lat: this.props.lat, lng: this.props.lng },
      map,
      icon: {
        url: 'http://www.google.com/mapfiles/gadget/arrowSmall80.png',
        scaledSize: new google.maps.Size(62, 54),
      },
    });

    map.addListener('click', (e) => {
      console.log('lat', e.latLng.lat(), 'lng', e.latLng.lng());
      this.getLatLng(e.latLng, map);
    });

    destinationMarker.addListener('click', (e) => {
      console.log('lat', e.latLng.lat(), 'lng', e.latLng.lng());
      this.getLatLng(e.latLng, map);
    });

    this.setState({ map });
    console.log('map is open');
  }

  handleClick(e) {
    e.preventDefault();

    const copyStatePolygon = this.state.polygon.slice();
    copyStatePolygon.push(copyStatePolygon[0]);
    console.log(copyStatePolygon);

    const flightPath = new google.maps.Polyline({
      path: copyStatePolygon,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 10,
    });
    flightPath.setMap(this.state.map);

    this.setState({
      polygon: copyStatePolygon,
    });
    this.props.savePolygon(copyStatePolygon);
  }

  render() {
    return (
      <div className="selectbox">
        <div style={{ textAlign: 'left' }}>
          {this.props.label}
        </div>
        <button onClick={e => this.handleClick(e)} style={{ marginTop: 10, marginBottom: 20 }}>Draw flight area</button>
        <div ref="map" className="myMap" style={{ height: '700px' }} />
      </div>
    );
  }
}

export default CreatePolygon;
