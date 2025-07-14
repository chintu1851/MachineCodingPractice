import './App.css';
import { useState } from 'react';

function App() {
  const [cost, setcost] = useState();
  const [interest, setinterest] = useState(10);
  const [fee, setfee] = useState(1);
  const [downpayment, setdownpayment] = useState(0);
  const [tenture, settenture] = useState(12);
  const [emi, setemi] = useState(0);
  const tenure = [12, 24, 36, 48, 60];

  const calculatemi = (dp = downpayment) => {
    if (!cost) return 0;

    const loanAmount = cost - dp;
    if (loanAmount <= 0) return 0;

    const monthlyInterest = interest / (12 * 100);
    const numberOfMonths = tenture;

    const emi =
      (loanAmount *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, numberOfMonths)) /
      (Math.pow(1 + monthlyInterest, numberOfMonths) - 1);

    return Number(emi.toFixed(0));
  };

  const calculateDP = (emiVal) => {
    if (!cost) return 0;

    const fullLoanEmi = calculatemi(0);
    const ratio = emiVal / fullLoanEmi;

    const loanAmount = ratio * cost;
    const dp = cost - loanAmount;
    return Math.round(dp);
  };

  const udpateemi = (e) => {
    if (!cost) return;

    const dp = Number(e.target.value);
    setdownpayment(Math.round(dp));

    const emiCalculated = calculatemi(dp);
    setemi(emiCalculated);
  };

  const updatedownpayment = (e) => {
    if (!cost) return;

    const emiVal = Number(e.target.value);
    setemi(Math.round(emiVal));

    const dp = calculateDP(emiVal);
    setdownpayment(dp);
  };

  return (
    <div className="App">
      <h2>EMI Calculator</h2>
      <div className="container">
        <span>Total Cost of Asset</span>
        <input
          type="number"
          value={cost}
          placeholder="Total cost of asset"
          onChange={(e) => setcost(Number(e.target.value))}
        />

        <span>Interest Rate (in %)</span>
        <input
          type="number"
          value={interest}
          placeholder="Interest rate"
          onChange={(e) => setinterest(Number(e.target.value))}
        />

        <span>Processing Fees (in %)</span>
        <input
          type="number"
          value={fee}
          placeholder="Processing fee"
          onChange={(e) => setfee(Number(e.target.value))}
        />

        <span>Down Payment</span>
        <input
          type="range"
          min={0}
          max={cost}
          value={downpayment}
          className="slider"
          onChange={udpateemi}
        />
        <div className="range-labels">
          <label>0%</label>
          <b>{downpayment}</b>
          <label>100%</label>
        </div>

        <span>Loan Per Month</span>
        <input
          type="range"
          min={0}
          max={calculatemi(0)}
          value={emi}
          className="slider"
          onChange={updatedownpayment}
        />
        <div className="range-labels">
          <label>0</label>
          <b>{emi}</b>
          <label>{calculatemi(0)}</label>
        </div>

        <span>Tenure</span>
        <div className="tenure-group">
          {tenure.map((t) => (
            <button
              key={t}
              className={`tenure ${t === tenture ? 'activetenure' : ''}`}
              onClick={() => settenture(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
