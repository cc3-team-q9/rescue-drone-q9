import React, { Component } from 'react';
import CreatePolygon from './CreatePolygon';
import SelectPilot from './SelectPilot';
import Form from './Form';
import SelectBox from './SelectBox';

class CreateFlightPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pilotId: '',
      maxAltitude: '',
      startTime: '',
      endTime: '',
      buffer: '',
      polygon: [],
    };

    this.getPilotId = this.getPilotId.bind(this);
    this.savePilotId = this.savePilotId.bind(this);
    this.saveMaxAltitude = this.saveMaxAltitude.bind(this);
    this.saveStartTime = this.saveStartTime.bind(this);
    this.saveEndTime = this.saveEndTime.bind(this);
    this.saveBuffer = this.saveBuffer.bind(this);
    this.savePolygon = this.savePolygon.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.saveStartTime = this.saveStartTime.bind(this);
    this.saveEndTime = this.saveEndTime.bind(this);

    this.handleStartDateChanged = this.handleStartDateChanged.bind(this);
    this.handleEndDateChanged = this.handleEndDateChanged.bind(this);
  }

  getPilotId() {
    fetch('url')
      .then(res => res.json());
  }

  savePilotId(pilotId) {
    this.setState({ pilotId });
  }

  saveMaxAltitude(maxAltitude) {
    this.setState({ maxAltitude });
  }

  saveStartTime(startTime) {
    this.setState({ startTime });
  }

  saveEndTime(endTime) {
    this.setState({ endTime });
  }

  saveBuffer(buffer) {
    this.setState({ buffer });
  }

  savePolygon(polygon) {
    this.setState({ polygon });
  }

  handleClick() {
    console.log(this.state);
    const polygon = this.state.polygon.map(latAndLng => [latAndLng.lng, latAndLng.lat]);
    const { startTime } = this.state;
    const { endTime } = this.state;

    fetch('/api/flightPlans', {
      method: 'POST',
      body: JSON.stringify({
        geometry: {
          type: 'Polygon',
          coordinates: polygon,
        },
        takeoff_latitude: 35.657986,
        takeoff_longitude: 139.727622,
        max_alittude_agl: this.state.maxAltitude,
        pilot_id: this.state.pilotId,
        start_time: startTime,
        end_time: endTime,
        buffer: this.state.buffer,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
      .then(() => {
        console.log('Successfully add this flight plan');
        alert('This flight plan was submitted to AIRMAP API');
      })
      .catch(err => console.log(err));
  }

  handleStartDateChanged(e) {
    e.preventDefault();
    this.saveStartTime(`${e.target.value}:00`);
  }

  handleEndDateChanged(e) {
    e.preventDefault();
    this.saveStartTime(`${e.target.value}:00`);
  }

  render() {
    return (
      <div className="rescue-team-app" style={{ height: '100%', width: '100%' }}>
        <div className="create-flight-plan-area" style={{ display: 'flex', backgroundColor: 'rgb(59, 66, 68)', color: 'white' }}>
          <div className="create-flight-plan-requirement" style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 'bold' }}>
            <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 20 }}>
              <SelectPilot
                label="Pilot"
                savePilotId={this.savePilotId}
              />
            </div>
            <div style={{ marginLeft: 20, marginBottom: 20 }}>
              <Form
                label="Maximum altitude in meters above ground level"
                example="Example: 60.96"
                saveFormContent={this.saveMaxAltitude}
              />
            </div>

            <div style={{ marginLeft: 20, marginBottom: 20 }}>
              <div style={{ textAlign: 'left', marginBottom: 10 }}>Start time of flight(cannot be in the past)</div>
              <div style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'initial' }}>Select date and time</div>
              <div style={{ display: 'flex' }}>
                <form>
                  <input type="datetime-local" onChange={this.handleStartDateChanged} />
                </form>
              </div>
            </div>

            <div style={{ marginLeft: 20, marginBottom: 20 }}>
              <div style={{ textAlign: 'left', marginBottom: 10 }}>End time of flight(must be after start time</div>
              <div style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'initial' }}>Select date and time</div>
              <div style={{ display: 'flex' }}>
                <form>
                  <input type="datetime-local" onChange={this.handleEndDateChanged} />
                </form>
              </div>
            </div>

            <div style={{ marginLeft: 20, marginBottom: 20 }}>
              <Form
                label="Buffer(must be at least 1 and bounds 0 to 2000)"
                example="Example: 1"
                saveFormContent={this.saveBuffer}
              />
            </div>
            <button onClick={() => this.handleClick()}>Submit</button>
          </div>

          <div
            className="create-flight-plan-polygon"
            style={{
              textAlign: 'left', marginTop: 20, marginLeft: 20, width: '100%', fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 'bold',
            }}
          >
            <CreatePolygon
              label="Flight Area"
              lat={this.props.userMessage.latitude}
              lng={this.props.userMessage.longitude}
              savePolygon={this.savePolygon}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default CreateFlightPlan;
