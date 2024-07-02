import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <h1>Ethereum Validator App</h1>
      <p>
        Ethereum Validator App is a specialized application designed to provide comprehensive information about Ethereum validators fetched from Beaconcha.in, a trusted source for Ethereum blockchain data. Whether you're a validator, investor, or enthusiast, Ethereum Validator App offers valuable insights into the Ethereum Validator network.
      </p>
      <h2>Key Features:</h2>
      <ol>
        <li>
          <strong>Validator Details:</strong> <br />
          Ethereum Validator App provides detailed information about individual Ethereum validators. This includes essential data such as validator ID, status, balance, performance metrics, information on Epoch and withdrawals..
        </li><br />
        <li>
          <strong>Attestations and Performance:</strong> <br />
          Users can track validator performance metrics such as the Epoch number, Attestations slot, Inclusion Slot, it's Status, start and end of those performance.
        </li><br />
        <li>
          <strong>Top 10 Validators:</strong> <br />
          Ethereum Validator App highlights the top 10 Ethereum validators based on criteria such as stake size, efficiency, and reliability. This feature helps users identify leading validators in the network and also their information.
        </li>
        </ol>
    </div>
  );
};

export default About;