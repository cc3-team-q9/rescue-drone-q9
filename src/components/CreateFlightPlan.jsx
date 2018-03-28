import React, { Component } from 'react';
import CreatePolygon from './CreatePolygon';
import SelectPilot from './SelectPilot';
import Form from './Form';

class CreateFlightPlan extends Component {
  constructor(props) {
    super(props);
    const currentTime = new Date();
    const timeDiffMins = currentTime.getTimezoneOffset();
    const localTime = new Date(currentTime.getTime() - (timeDiffMins * 60 * 1000));
    const futureTime = localTime.getTime() + (6 * 60 * 60 * 1000);
    const startTime = `${localTime.toISOString().slice(0, -8)}:00`;
    const endTime = `${new Date(futureTime).toISOString().slice(0, -8)}:00`;

    this.state = {
      pilotId: '',
      maxAltitude: '60.96',
      startTime,
      endTime,
      buffer: '2',
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
      <div className="rescue-team-app">
        <div className="create-flight-plan-area">
          <div className="create-flight-plan-requirement">
              <SelectPilot
                label="Pilot"
                savePilotId={this.savePilotId}
              />
            <div style={{display: 'flex'}}>
              <Form
                label="Maximum altitude"
                example="Example: 60.96"
                defaultValue={this.state.maxAltitude}
                saveFormContent={this.saveMaxAltitude}
              />
              <div style={{ marginBottom: 20 }}>
                <Form
                  label="Buffer (must be bound 1 to 2000)"
                  example="Example: 2"
                  defaultValue={this.state.buffer}
                  saveFormContent={this.saveBuffer}
                />
              </div>
            </div>

            <div style={{display: 'flex'}}>
              <div className="set-time-div">
                <div className="set-time-title">Start time</div>
                <div className="set-time-direction">Select date and time</div>
                <div>
                  <form>
                    <input
                      type="datetime-local"
                      value={this.state.startTime}
                      onChange={this.handleStartDateChanged}
                    />
                  </form>
                </div>
              </div>

              <div className="set-time-div">
                <div className="set-time-title">End time</div>
                <div className="set-time-direction">Select date and time</div>
                <div>
                  <form>
                    <input
                      type="datetime-local"
                      value={this.state.endTime}
                      onChange={this.handleEndDateChanged}
                    />
                  </form>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ textAlign: 'left', margin: '23px' }}>Flight Area</div>
              <div style={{ textAlign: 'left', margin: '23px 23px 20px 23px', width: '450px', fontSize: '16px', fontWeight: 'initial' }}>
                Crete a flight area on the right map and then push a "Draw Flight Area" button.
              </div>
            </div>

            <div className="submit-flight-button-position">
              <button
                className="button submit-flight-button"
                onClick={() => this.handleClick()}
              >Submit Flight Plan
              </button>
            </div>
          </div>

          <div className="create-flight-plan-polygon">
            <CreatePolygon
              label=""
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
