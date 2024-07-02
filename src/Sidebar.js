// Sidebar.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopValidators } from './beaconchaAPI';
import './Sidebar.css';

const Sidebar = () => {
  const [validators, setValidators] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopValidators = async () => {
      try {
        const data = await getTopValidators();
        console.log('Fetched Validators:', data);
        setValidators(data.slice(0, 10)); // Set top 10 validators
      } catch (error) {
        console.error('Error fetching top validators:', error);
        setError('Error fetching data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopValidators();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="sidebar">
      <h2>Top 10 Validators</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Validator</th>
          </tr>
        </thead>
        <tbody>
          {validators.map((validator, index) => (
            <tr key={index}>
              <td style={{ textAlign: 'center' }}>{index + 1}</td>
              <td><center>
                <Link to={`/validator/${validator.validatorindex}`}>
                  {validator.validatorindex}
                </Link>
                </center>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sidebar;
