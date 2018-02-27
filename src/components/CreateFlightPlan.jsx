import React, { Component } from 'react';
import CreatePolygon from './CreatePolygon';
import SelectBox from './SelectBox';
import Form from './Form';

class CreateFlightPlan extends Component {
  constructor(props){
    super(props);
    this.state = {
      destination: {}
    }
  }

  getPilotId() {
    fetch('url')
      .then(res => res.json())
  }

  render() {
    return (
      <div className="rescue-team-app" style={{ height: "100%", width: "100%"}}>
        <div className='create-flight-plan-area' style={{display: 'flex', backgroundColor: 'rgb(59, 66, 68)', color: 'white'}}>
          <div className='create-flight-plan-requirement' style={{fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 'bold'}}>
            <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 20}}>
              <SelectBox
                label={'• Pilot (user) identifier'}
              />
            </div>

            <div style={{ marginLeft: 20,marginBottom: 20}}>
              <Form 
                label={'• Maximum altitude in meters Above Ground Level'}
                example={'Example: 60.96'}
              />
            </div>

            <div style={{ marginLeft: 20,marginBottom: 20}}>
              <Form 
                label={'• Start time of flight(cannot be in the past)'}
                example={'Example: 2017-11-24T03:25:13 (Nov 24th, 3:25:13)'}
              />
            </div>

            <div style={{ marginLeft: 20,marginBottom: 20}}>
              <Form 
                label={'• End time of flight(must be after start time)'}
                example={'Example: 2017-11-24T03:25:13 (Nov 24th, 3:25:13)'}
              />
            </div>

            <div style={{ marginLeft: 20,marginBottom: 20}}>
              <Form 
                label={'• Buffer(must be at least 1 and bounds 0, 2000)'}
                example={'Example: 1'}
              />
            </div>
          </div>

          <div className='create-flight-plan-polygon' style={{ marginTop: 20, marginLeft: 20, width: "100%", fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 'bold'}}>
            <CreatePolygon 
              label={'• Create GeoJSON Polygon of Flight Area'}
              lat={this.props.userMessage.latitude}
              lng={this.props.userMessage.longitude}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default CreateFlightPlan;