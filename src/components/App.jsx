import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Map from '../containers/Map';
import Sidebar from '../containers/Sidebar';
import Navbar from '../containers/Navbar';
import EmergencyList from '../containers/EmergencyList';
import CreateFlightPlan from '../components/CreateFlightPlan';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessage: {},
    };
    this.setUserMessage = this.setUserMessage.bind(this);
  }

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
          <EmergencyList
            setUserMessage={this.setUserMessage}
          />
        </div>
      );
    }

    return (
      <div className="App" style={{ height: '100%' }}>
        <div className="App-header">
          <Navbar id="navbar" />
        </div>
        <CreateFlightPlan
          userMessage={this.state.userMessage}
        />
      </div>
    );
  }

  setUserMessage(userMessage) {
    this.setState({ userMessage });
  }

  render() {
    return this.currentView;
  }
}

App.propTypes = {
  currentView: PropTypes.string.isRequired,
};

export default App;
