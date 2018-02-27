import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    } 
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className='form'>
          <label>
            {this.props.label}
            <div className='example'>
              {this.props.example}
            </div>
            <input type='text' value={this.state.value} onChange={e => this.handleChange(e)}/> 
          </label>
      </div>
    );
  }
}

export default Form;