import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ goAdmin, goUser }) => (
  <div className="navbar">
    <button
      className="navbar-button"
      onClick={() => goAdmin()}
    >Admin
    </button>
    <button
      className="navbar-button"
      onClick={() => goUser()}
    >User
    </button>
  </div>
);

Navbar.propTypes = {
  goAdmin: PropTypes.func.isRequired,
  goUser: PropTypes.func.isRequired,
};

export default Navbar;
