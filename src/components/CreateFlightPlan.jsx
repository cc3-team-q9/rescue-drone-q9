import React, { Component } from 'react';
import CreatePolygon from './CreatePolygon';
import SelectPilot from './SelectPilot';
import Form from './Form';
import SelectBox from './SelectBox';

const day = require('../utils/day.json');
const month = require('../utils/month.json');
const year = require('../utils/year.json');
const hour = require('../utils/hour.json');
const minute = require('../utils/minute.json');
const second = require('../utils/second.json');

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
      startYear: '',
      startMonth: '',
      startDay: '',
      startHour: '',
      startMinute: '',
      startSecond: '',
      endYear: '',
      endMonth: '',
      endDay: '',
      endHour: '',
      endMinute: '',
      endSecond: '',
    };

    this.getPilotId = this.getPilotId.bind(this);
    this.savePilotId = this.savePilotId.bind(this);
    this.saveMaxAltitude = this.saveMaxAltitude.bind(this);
    this.saveStartTime = this.saveStartTime.bind(this);
    this.saveEndTime = this.saveEndTime.bind(this);
    this.saveBuffer = this.saveBuffer.bind(this);
    this.savePolygon = this.savePolygon.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.saveStartMonth = this.saveStartMonth.bind(this);
    this.saveStartDay = this.saveStartDay.bind(this);
    this.saveStartYear = this.saveStartYear.bind(this);
    this.saveStartHour = this.saveStartHour.bind(this);
    this.saveStartMinute = this.saveStartMinute.bind(this);
    this.saveStartSecond = this.saveStartSecond.bind(this);

    this.saveEndMonth = this.saveEndMonth.bind(this);
    this.saveEndDay = this.saveEndDay.bind(this);
    this.saveEndYear = this.saveEndYear.bind(this);
    this.saveEndHour = this.saveEndHour.bind(this);
    this.saveEndMinute = this.saveEndMinute.bind(this);
    this.saveEndSecond = this.saveEndSecond.bind(this);
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

  saveStartYear(startYear) {
    this.setState({ startYear });
  }

  saveStartMonth(startMonth) {
    this.setState({ startMonth });
  }

  saveStartDay(startDay) {
    this.setState({ startDay });
  }

  saveStartYear(startYear) {
    this.setState({ startYear });
  }

  saveStartHour(startHour) {
    this.setState({ startHour });
  }

  saveStartMinute(startMinute) {
    this.setState({ startMinute });
  }

  saveStartSecond(startSecond) {
    this.setState({ startSecond });
  }

  saveEndMonth(endMonth) {
    this.setState({ endMonth });
  }

  saveEndDay(endDay) {
    this.setState({ endDay });
  }

  saveEndYear(endYear) {
    this.setState({ endYear });
  }

  saveEndHour(endHour) {
    this.setState({ endHour });
  }

  saveEndMinute(endMinute) {
    this.setState({ endMinute });
  }

  saveEndSecond(endSecond) {
    this.setState({ endSecond });
  }

  handleClick() {
    console.log(this.state);
    const polygon = this.state.polygon.map(latAndLng => [latAndLng.lng, latAndLng.lat]);
    const startTime = `${this.state.startYear}-${this.state.startMonth}-${this.state.startDay}T${this.state.startHour}:${this.state.startMinute}:${this.state.startSecond}`;
    const endTime = `${this.state.endYear}-${this.state.endMonth}-${this.state.endtDay}T${this.state.endHour}:${this.state.endMinute}:${this.state.endSecond}`;

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
              <div style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'initial' }}>Select month, day and year</div>
              <div style={{ display: 'flex' }}>
                <SelectBox
                  items={month}
                  label="Select month"
                  selectItem={this.saveStartMonth}
                />
                <SelectBox
                  items={day}
                  label="Select day"
                  selectItem={this.saveStartDay}
                />
                <SelectBox
                  items={year}
                  label="Select year"
                  selectItem={this.saveStartYear}
                />
              </div>
              <div style={{
 textAlign: 'left', fontSize: '16px', fontWeight: 'initial', marginTop: 10
 }}>Select hour, minute and second</div>
              <div style={{ display: 'flex' }}>
                <SelectBox
                  items={hour}
                  label="Select hour"
                  selectItem={this.saveStartHour}
                />
                <SelectBox
                  items={minute}
                  label="Select minute"
                  selectItem={this.saveStartMinute}
                />
                <SelectBox
                  items={second}
                  label="Select second"
                  selectItem={this.saveStartSecond}
                />
              </div>
            </div>

            <div style={{ marginLeft: 20, marginBottom: 20 }}>
              <div style={{ textAlign: 'left', marginBottom: 10 }}>End time of flight(must be after start time</div>
              <div style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'initial' }}>Select month, day and year</div>
              <div style={{ display: 'flex' }}>
                <SelectBox
                  items={month}
                  label="Select month"
                  selectItem={this.saveEndMonth}
                />
                <SelectBox
                  items={day}
                  label="Select day"
                  selectItem={this.saveEndDay}
                />
                <SelectBox
                  items={year}
                  label="Select year"
                  selectItem={this.saveEndYear}
                />
              </div>
              <div style={{ 
textAlign: 'left', fontSize: '16px', fontWeight: 'initial', marginTop: 10 
}}>Select hour, minute and second</div>
              <div style={{ display: 'flex' }}>
                <SelectBox
                  items={hour}
                  label="Select hour"
                  selectItem={this.saveEndHour}
                />
                <SelectBox
                  items={minute}
                  label="Select minute"
                  selectItem={this.saveEndMinute}
                />
                <SelectBox
                  items={second}
                  label="Select second"
                  selectItem={this.saveEndSecond}
                />
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

          <div className="create-flight-plan-polygon" style={{
 textAlign: 'left', marginTop: 20, marginLeft: 20, width: '100%', fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 'bold'
 }}>
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
