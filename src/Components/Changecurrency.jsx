import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Changecurrency.css';

export default function Changecurrency() {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    axios.get('https://v6.exchangerate-api.com/v6/9f5097c48a54d084142525b6/latest/USD')
      .then(response => {
        setRates(response.data.conversion_rates);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleConvert = () => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const conversionRate = rates[toCurrency] / rates[fromCurrency];
      setConvertedAmount((amount * conversionRate).toFixed(2));
    }
  };

  if (loading) {
    return (
      <div>
        <center>
          <h1>Loading...</h1>
        </center>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <center>
          <h1>Error: {error.message}</h1>
        </center>
      </div>
    );
  }

  return (
    <div className='quiz-main-container'>
    <div className="container">
      <center>
        <h1>Currency Converter</h1>
        <div className="converter">
          <div>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
            <select
              value={fromCurrency}
              onChange={e => setFromCurrency(e.target.value)}
            >
              {Object.keys(rates).map(currency => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={toCurrency}
              onChange={e => setToCurrency(e.target.value)}
            >
              {Object.keys(rates).map(currency => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleConvert}>Convert</button>
        </div>
        {convertedAmount !== null && (
          <h2>
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </h2>
        )}
      </center>
    </div>
    </div>
  );
}
