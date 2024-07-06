import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from './beaconchaAPI';
import './Validator.css';

function Validator() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value.trim();
    setError('');

    if (/^[0-9]*$/.test(value) || value === '') {
      setInput(value);

      if (value.length > 2) {
        axios.get(`${API_URL}/search/indexed_validators/${encodeURIComponent(value)}`)
          .then(response => {
            if (response.data.data.length === 0) {
              setError('No results found. Please enter a valid Validator ID.');
              setSuggestions([]);
            } else {
              setError('');
              setSuggestions(response.data.data);
            }
          })
          .catch(error => {
            console.error('Error fetching suggestions:', error);
            setError('');
            setSuggestions([]);
          });
      } else {
        setSuggestions([]);
        setError('');
      }
    } else {
      setInput(value);
      setSuggestions([]);
      setError('Invalid input format. Please enter only numbers.');
    }
  };

  const handleSelect = (validatorId) => {
    navigate(`/validator/${validatorId}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();

    if (/^[0-9]+$/.test(trimmedInput)) {
      navigate(`/validator/${encodeURIComponent(trimmedInput)}`);
    } else {
      setError('Invalid input format. Please enter only numbers.');
    }
  };

  return (
    <div className="validator">
      <center>
        <h2>Validator Search</h2>
        <p>Enter a Validator ID:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleChange} />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {suggestions.length > 0 && (
          <ul>
            {suggestions.map(suggestion => (
              <li key={suggestion.id} onClick={() => handleSelect(suggestion.id)}>
                {suggestion.id}
              </li>
            ))}
          </ul>
        )}
      </center>
    </div>
  );
}

export default Validator;
