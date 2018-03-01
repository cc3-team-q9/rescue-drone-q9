import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectPilot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pilotId: [
        'Mike Lee',
        'Bill Smith',
        'Krystal Williams',
        'Christian Miller',
        'Potato Davis',
      ],
      selectedPilotId: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ selectedPilotId: e.target.value });
    this.props.savePilotId(e.target.value);
  }

  render() {
    return (
      <div className="select-pilot">
        <label>
          {this.props.label}
          <div style={{ marginTop: 10 }}>
            <select className="select-pilot-field" value={this.state.selectedPilotId} onChange={e => this.handleChange(e)}>
              <option key={99} value="Select a pilot">Select a pilot</option>
              {this.state.pilotId.map((pilot, index) => (<option key={index} value={pilot}>{pilot}</option>))}
            </select>
          </div>
        </label>
      </div>
    );
  }
}

SelectPilot.propTypes = {
  savePilotId: PropTypes.func.isRequired,
};

export default SelectPilot;

