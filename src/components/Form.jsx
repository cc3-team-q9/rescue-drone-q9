import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
    this.props.saveFormContent(e.target.value);
  }

  render() {
    return (
      <div className="alititude-form">
        <label htmlFor="altitude">
          {this.props.label}
          <div
            className="altitude-example"
          >
            {this.props.example}
          </div>
          <input type="text" value={this.state.value} onChange={e => this.handleChange(e)} />
        </label>
      </div>
    );
  }
}

Form.propTypes = {
  saveFormContent: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default Form;
