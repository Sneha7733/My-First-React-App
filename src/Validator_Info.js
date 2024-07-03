import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from './beaconchaAPI';
import './Validator_Info.css';

const Validator_Info = () => {
  const { id } = useParams();
  const [validatorData, setValidatorData] = useState(null);
  const [attestations, setAttestations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchValidatorData = async () => {
      setIsLoading(true);
      try {
        const validatorResponse = await axios.get(`${API_URL}/validator/${id}`);
        const data = validatorResponse.data.data;

        const formattedValidatorData = {
          activationEligibilityEpoch: data.activationeligibilityepoch,
          activationEpoch: data.activationepoch,
          balance: data.balance,
          effectiveBalance: data.effectivebalance,
          exitEpoch: data.exitepoch,
          lastAttestationSlot: data.lastattestationslot,
          pubkey: data.pubkey,
          slashed: data.slashed,
          status: data.status,
          validatorIndex: data.validatorindex,
          withdrawableEpoch: data.withdrawableepoch,
          withdrawalCredentials: data.withdrawalcredentials,
          totalWithdrawals: data.total_withdrawals,
        };

        setValidatorData(formattedValidatorData);

        const attestationsResponse = await axios.get(`${API_URL}/validator/${id}/attestations`);
        const attestationsData = attestationsResponse.data.data;

        const formattedAttestations = attestationsData.map(attestation => ({
          attesterSlot: attestation.attesterslot,
          epoch: attestation.epoch,
          inclusionSlot: attestation.inclusionslot,
          status: attestation.status,
          week: attestation.week,
          weekStart: attestation.week_start,
          weekEnd: attestation.week_end,
        }));

        setAttestations(formattedAttestations);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchValidatorData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="validator-info">
      {validatorData && (
        <>
          <h1>Validator {validatorData.validatorIndex}</h1>
          <p><b><center>Public Key: {validatorData.pubkey}</center></b></p>
          <h2>Validator Stats</h2>
          <div className="stats-box">
            <div className='list'>
              <ul>
                <li>Status: {validatorData.status}</li>
                <li>Balance: {validatorData.balance}</li>
                <li>Effective Balance: {validatorData.effectiveBalance}</li>
                <li>Activation Eligibility Epoch: {validatorData.activationEligibilityEpoch}</li>
                <li>Activation Epoch: {validatorData.activationEpoch}</li>
              </ul>
            </div>
            <div className='list'>
              <ul>
                <li>Exit Epoch: {validatorData.exitEpoch}</li>
                <li>Last Attestation Slot: {validatorData.lastAttestationSlot}</li>
                <li>Slashed: {validatorData.slashed ? 'Yes' : 'No'}</li>
                <li>Withdrawable Epoch: {validatorData.withdrawableEpoch}</li>
                <li>Total Withdrawals: {validatorData.totalWithdrawals}</li>
              </ul>
            </div>
          </div>
        </>
      )}

      {attestations.length > 0 ? (
        <>
          <h2>Attestations</h2>
          <div className="attestations-table-container">
            <table id="attestations-table">
              <thead>
                <tr>
                  <th>Epoch</th>
                  <th>Attester Slot</th>
                  <th>Inclusion Slot</th>
                  <th>Status</th>
                  <th>Week</th>
                  <th>Week Start</th>
                  <th>Week End</th>
                </tr>
              </thead>
              <tbody>
                {attestations.map((attestation, index) => (
                  <tr key={index}>
                    <td>{attestation.epoch}</td>
                    <td>{attestation.attesterSlot}</td>
                    <td>{attestation.inclusionSlot}</td>
                    <td>{attestation.status}</td>
                    <td>{attestation.week}</td>
                    <td>{attestation.weekStart}</td>
                    <td>{attestation.weekEnd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>No attestations found.</p>
      )}
    </div>
  );
};

export default Validator_Info;
