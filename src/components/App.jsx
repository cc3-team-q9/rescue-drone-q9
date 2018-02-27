import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Map from '../containers/Map';
import Sidebar from '../containers/Sidebar';
import Navbar from '../containers/Navbar';
import EmergencyList from '../containers/EmergencyList';
import CreateFlightPlan from '../components/CreateFlightPlan';

class App extends Component {
  get currentView() {
    if (this.props.currentView === 'User') {
      return (
        <div className="App" style={{ height: '100%' }}>
          <div className="App-header">
            <Navbar id="navbar" />
          </div>
          <div className="map">
            <Map id="map" />
          </div>
          <Sidebar />
        </div>
      );
    }

    if (this.props.currentView === 'Admin') {
      return (
        <div className="App" style={{ height: '100%' }}>
          <div className="App-header">
            <Navbar id="navbar" />
          </div>
          <EmergencyList />
        </div>
      );
    }

    return (
      <div className="App" style={{ height: '100%' }}>
        <div className="App-header">
          <Navbar id="navbar" />
        </div>
        <CreateFlightPlan />
      </div>
    );

  }

  render() {
    return this.currentView;
  }
}

App.propTypes = {
  currentView: PropTypes.string.isRequired,
};

export default App;
