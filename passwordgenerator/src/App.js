import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [length, setlength] = useState(4)
  const [checkboxdata, setcheckboxdata] = useState([{
    title: "include Uppercase", state: false
  },
  {
    title: "include Lowecase", state: false
  },
  {
    title: "include Number", state: false
  },
  {
    title: "include Symbol", state: false
  },])
  const handlecheckboxdata = (index) => {
    const updatedcheckbox = [...checkboxdata]
    updatedcheckbox[index].state = !updatedcheckbox[index].state
    console.log('running chckbox', updatedcheckbox[index].state)
    setcheckboxdata(updatedcheckbox)
  }
  return (
    <div className="container">
      <div className='header'>
        <div className='title'>Kj6y#L3$</div>
        <button className='copybtn' onClick={() => { }}>Copy</button>
      </div>
      <div className='character'>
        <span><lable>Character Length</lable></span>
        <input type='range' min="4" max="20" onChange={(e) => setlength(e.target.value)} />
        <h3>{length}</h3>
      </div>
      <div className='checkboxes'>
        {
          checkboxdata.map((checkbox, index) => {
            return <div key={index}>
              <input type='checkbox' checked={checkbox.state} onChange={() => handlecheckboxdata(index)} />
              <label>{checkbox.title}</label>
            </div>
          })
        }
      </div>
      <button className='passwordgenerate'>Generate Password</button>
    </div>
  );
}

export default App;
