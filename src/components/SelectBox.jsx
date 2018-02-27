import React, { Component } from 'react';

class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pilotId: [
        'Mikefjaij;hf;jkfajjjjkkljjruhh',
        'Billfjaij;hf;jkfaafhuahrjhjhjr',
        'Krystalfjaij;hf;jakhgahkgkhkfa',
        'Christianfjaij;hf;jkfaafhkakrg',
        'Potatofjaij;hf;jkfaakjfhkjhjkr'
      ],
      selectedPilotId: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ selectedPilotId: e.target.value });
    this.props.savePilotId(e.target.value);
  }

  render() {
    return (
      <div className="selectbox">
        <label>
          {this.props.label}
          <select className="select-field" value={this.state.selectedPilotId} onChange={e => this.handleChange(e)}>
            <option key={99} value={'Choose a pilot for this flight plan'}>{'Choose a pilot for this flight plan'}</option>
            {this.state.pilotId.map((pilot, index) => (<option key={index} value={pilot}>{pilot}</option>))}
          </select>
        </label>
      </div>
    );
  }
}

export default SelectBox;

