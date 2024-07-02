import React from 'react';
import './WEL_COME.css';


function WEL_COME() {
  return (
    <div className="welcome">
      <center>
        <h1>Welcome to Ethereum Validator Tracker</h1>
        <p>This application allows you to track the Ethereum Validator Stats and it's attestations. It allows the User to know the Top 10 Validators along with it's details.</p>
        <img src={`${process.env.PUBLIC_URL}/eth-valid.jpg`} alt="Ethereum Validator" className="welcome-image" />
      </center>
    </div>
  );
}

export default WEL_COME;
