import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="title"><b>Ethereum Validator App</b></div>
      <div className="nav-links">
        <Link to="/welcome"><h1><b>Welcome User!!</b></h1></Link>
        <Link to="/validator"><h1><b>Validator Search</b></h1></Link>
        <Link to="/about"><h1><b>About</b></h1></Link>
      </div>
    </nav>
  );
}

export default Navbar;
