import React, { Component } from 'react';
import CreatePolygon from './CreatePolygon';
import SelectBox from './SelectBox';
import Form from './Form';

class CreateFlightPlan extends Component {
  constructor(props){
    super(props);
<<<<<<< HEAD
    this.state = {
      pilotId: '',
      maxAltitude: '',
      startTime: '',
      endTime: '',
      buffer: '',
      polygon: []
    }
    this.getPilotId = this.getPilotId.bind(this);
    this.savePilotId = this.savePilotId.bind(this);
    this.saveMaxAltitude = this.saveMaxAltitude.bind(this);
    this.saveStartTime = this.saveStartTime.bind(this);
    this.saveEndTime = this.saveEndTime.bind(this);
    this.saveBuffer = this.saveBuffer.bind(this);
    this.savePolygon = this.savePolygon.bind(this);
    this.handleClick = this.handleClick.bind(this);
=======
>>>>>>> master
  }

  getPilotId() {
    fetch('url')
      .then(res => res.json())
  }

<<<<<<< HEAD
  savePilotId(pilotId) {
    this.setState({ pilotId })
  }

  saveMaxAltitude(maxAltitude) {
    this.setState({ maxAltitude });
  }

  saveStartTime(startTime) {
    this.setState({ startTime });
  }

  saveEndTime(endTime) {
    this.setState({ endTime })
  }

  saveBuffer(buffer) {
    this.setState({ buffer })
  }

  savePolygon(polygon) {
    this.setState({ polygon })
  }

  handleClick() {
    console.log(this.state);
    const polygon = this.state.polygon.map(latAndLng => [ latAndLng.lng, latAndLng.lat ]);
    fetch(`/api/flightPlans`, {
      method: 'POST',
      body: JSON.stringify({ 
        geometry: {
          'type': 'Polygon',
          'coordinates': polygon
        },
        takeoff_latitude: 35.657986,
        takeoff_longitude: 139.727622,
        max_alittude_agl: this.state.maxAltitude,
        pilot_id: this.state.pilotId, 
        start_time: this.state.startTime,
        end_time: this.state.endTime,
        buffer: this.state.buffer,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      })
    })
    .then(() => console.log('Successfully add this flight plan'))
    .catch(err => console.log(err))
  }

  render() {
=======
  render() {
    console.log('here is CreteFlightPlan', this.props.userMessage);
>>>>>>> master
    return (
      <div className="rescue-team-app" style={{ height: "100%", width: "100%"}}>
        <div className='create-flight-plan-area' style={{display: 'flex', backgroundColor: 'rgb(59, 66, 68)', color: 'white'}}>
          <div className='create-flight-plan-requirement' style={{fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 'bold'}}>
            <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 20}}>
              <SelectBox
                label={'• Pilot (user) identifier'}
<<<<<<< HEAD
                savePilotId={this.savePilotId}
              />
            </div>
=======
              />
            </div>

>>>>>>> master
            <div style={{ marginLeft: 20,marginBottom: 20}}>
              <Form 
                label={'• Maximum altitude in meters Above Ground Level'}
                example={'Example: 60.96'}
<<<<<<< HEAD
                saveFormContent={this.saveMaxAltitude}
=======
>>>>>>> master
              />
            </div>

            <div style={{ marginLeft: 20,marginBottom: 20}}>
              <Form 
                label={'• Start time of flight(cannot be in the past)'}
                example={'Example: 2017-11-24T03:25:13 (Nov 24th, 3:25:13)'}
<<<<<<< HEAD
                saveFormContent={this.saveStartTime}
=======
>>>>>>> master
              />
            </div>

            <div style={{ marginLeft: 20,marginBottom: 20}}>
              <Form 
                label={'• End time of flight(must be after start time)'}
                example={'Example: 2017-11-24T03:25:13 (Nov 24th, 3:25:13)'}
<<<<<<< HEAD
                saveFormContent={this.saveEndTime}
=======
>>>>>>> master
              />
            </div>

            <div style={{ marginLeft: 20,marginBottom: 20}}>
              <Form 
                label={'• Buffer(must be at least 1 and bounds 0, 2000)'}
                example={'Example: 1'}
<<<<<<< HEAD
                saveFormContent={this.saveBuffer}
              />
            </div>
            <button onClick={() => this.handleClick()}>Submit</button>
=======
              />
            </div>
>>>>>>> master
          </div>

          <div className='create-flight-plan-polygon' style={{ marginTop: 20, marginLeft: 20, width: "100%", fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 'bold'}}>
            <CreatePolygon 
              label={'• Create GeoJSON Polygon of Flight Area'}
              lat={this.props.userMessage.latitude}
              lng={this.props.userMessage.longitude}
<<<<<<< HEAD
              savePolygon={this.savePolygon}
=======
>>>>>>> master
            />
          </div>
        </div>

      </div>
    );
  }
}

export default CreateFlightPlan;