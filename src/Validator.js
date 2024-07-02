import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from './beaconchaAPI';
import './Validator.css';

function Validator() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length > 2) {
      axios.get(`${API_URL}/search/indexed_validators/${value}`)
        .then(response => {
          setSuggestions(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching suggestions:', error);
        });
    }
  };

  const handleSelect = (validatorId) => {
    navigate(`/validator/${validatorId}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      navigate(`/validator/${input}`);
    }
  };

  return (
    <div className="validator"><center>
      <h2>Validator Search</h2>
      <p>Enter a Validator ID or Pubkey:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
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
