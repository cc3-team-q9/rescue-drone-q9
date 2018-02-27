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
      ]
    } 
  }

  render() {
    return (
      <div className="selectbox">
        <label>
          {this.props.label}
          <select className="select-field" value={this.state.pilotId} onChange={e => this.handleChange(e)}>
            <option key={99}>{'Choose a pilot for this flight plan'}</option>
            {this.state.pilotId.map((pilot, index) => (<option key={index} value={pilot}>{pilot}</option>))}
          </select>
        </label>
      </div>
    );
  }
}

export default SelectBox;

