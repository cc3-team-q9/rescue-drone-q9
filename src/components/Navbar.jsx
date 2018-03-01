import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ goAdmin, goUser }) => (
  <div className="navbar">
    <div className="navbar-icon">
      <img src="./icon.png" alt="icon" />
    </div>
    <div className="navbar-buttons">
      <button
        className="button navbar-button"
        onClick={() => goAdmin()}
      >Admin
      </button>
      <button
        className="button navbar-button"
        onClick={() => goUser()}
      >User
      </button>
    </div>
  </div>
);

Navbar.propTypes = {
  goAdmin: PropTypes.func.isRequired,
  goUser: PropTypes.func.isRequired,
};

export default Navbar;
