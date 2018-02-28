import React, { Component } from 'react';

class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ selectedItem: e.target.value });
    this.props.selectItem(e.target.value);
  }

  render() {
    return (
      <div className="selectbox" style={{textAlign: 'left'}}>
        <div style={{ marginTop: 10, marginLeft: 5}}>
          <select className="select-field" value={this.state.selectedItem} onChange={e => this.handleChange(e)}>
            <option key={99} value={this.props.label}>{this.props.label}</option>
            {this.props.items.map((item, index) => (<option key={index} value={item}>{item}</option>))}
          </select>
        </div>
      </div>
    );
  }
}

export default SelectBox;

