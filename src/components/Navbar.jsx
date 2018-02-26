import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <button
          className="navbar-button"
          onClick={() => this.props.goAdmin()}
        >Admin
        </button>
        <button
          className="navbar-button"
          onClick={() => this.props.goUser()}
        >User
        </button>
      </div>
    );
  }
}

export default Navbar;
