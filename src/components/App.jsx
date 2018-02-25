import React from 'react';

import Map from '../containers/Map';
import Sidebar from '../containers/Sidebar';

const App = () => (
  <div className="App" style={{ height: '100%' }}>
    <div className="App-header">
      <h2>Rescue Drone Q9</h2>
    </div>
    <div className="map">
      <Map id="map" />
    </div>
    <Sidebar />
  </div>
);

export default App;
