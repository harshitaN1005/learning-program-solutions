import React, { useState } from "react";
import "./App.css";

function CurrencyConvertor() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");

  const handleConvert = () => {
    const conversionRate = 101.01; // Example conversion rate
    const euros = (amount / conversionRate).toFixed(2);
    alert(`Converting to Euro amount is ${euros}`);
  };

  return (
    <div className="App">
      <h3>Currency Converter</h3>
      <label>
        Amount:
        <input
          type="number"
          placeholder="Amount in Rupees"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Currency:
        <input
          type="text"
          placeholder="Currency in Euros"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button onClick={handleConvert}>submit</button>
    </div>
  );
}

export default CurrencyConvertor;
