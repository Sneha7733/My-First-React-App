import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from './beaconchaAPI';
import './Validator.css';

function Validator() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value.trim(); // Trim whitespace

    // Validate input format: only numbers and alphanumeric characters
    if (/^[0-9a-zA-Z]*$/.test(value) || value === '') {
      setInput(value);

      if (value.length > 2) {
        setLoading(true);
        axios.get(`${API_URL}/search/indexed_validators/${encodeURIComponent(value)}`)
          .then(response => {
            if (response.data.data.length === 0) {
              setError('No results found. Please enter a valid ID or pubkey.');
              setSuggestions([]);
            } else {
              setError('');
              setSuggestions(response.data.data);
            }
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching suggestions:', error);
            setError('');
            setSuggestions([]);
            setLoading(false);
          });
      } else {
        setSuggestions([]);
        setError('');
      }
    } else {
      setInput(value);
      setSuggestions([]);
      setError('Invalid input format. Please enter only numbers and alphanumeric characters.');
    }
  };

  const handleSelect = (validatorId) => {
    navigate(`/validator/${validatorId}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();

    if (trimmedInput && /^[0-9a-zA-Z]+$/.test(trimmedInput)) {
      navigate(`/validator/${encodeURIComponent(trimmedInput)}`);
    } else {
      setError('Invalid input format. Please enter only numbers and alphanumeric characters.');
    }
  };

  return (
    <div className="validator">
      <center>
        <h2>Validator Search</h2>
        <p>Enter a Validator ID or Pubkey:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleChange} />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {loading && <p>Loading...</p>}
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
