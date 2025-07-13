// App.js
import './App.css';
import { useState } from 'react';

function App() {
  const [cost, setcost] = useState(0);
  const [interest, setinterest] = useState(10);
  const [fee, setfee] = useState(1);
  const [downpayment, setdownpayment] = useState(0);
  const [tenture, settenture] = useState(12);
  const [emi, setemi] = useState(0);
  const tenure = [12, 24, 36, 48, 60]

  const udpateemi = (e) => {
    // Empty for now
    if (!cost) return

    const dp = Number(e.target.value)
    setdownpayment(dp.toFixed(0))
    const emi=calculatemi(dp)
    setemi(emi)

  };

  const updatedownpayment = (e) => {
       if (!cost) return

    const dp = Number(e.target.value)
    setemi(dp.toFixed(0))
  };

  const calculatemi = () => {
    // Empty for now
    //const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const loaamt=cost-downpayment
    const rateofinterest = interest/100
    const numberofyears=tenture/12

    const EMI = (loaamt*rateofinterest)*(1+rateofinterest)**(numberofyears)/((1+rateofinterest)**numberofyears-1)

    return Number(EMI/12).toFixed(0)

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
          onChange={(e) => setcost(e.target.value)}
        />

        <span>Interest Rate (in %)</span>
        <input
          type="number"
          value={interest}
          placeholder="Interest rate"
          onChange={(e) => setinterest(e.target.value)}
        />

        <span>Processing Fees (in %)</span>
        <input
          type="number"
          value={fee}
          placeholder="Processing fee"
          onChange={(e) => setfee(e.target.value)}
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
          min={calculatemi(cost)}
          max={calculatemi(0)}
          value={tenture}
          className="slider"
          onChange={updatedownpayment}
        />
        <div className="range-labels">
          <label>0%</label>
          <b>{emi}</b>
          <label>100%</label>
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
