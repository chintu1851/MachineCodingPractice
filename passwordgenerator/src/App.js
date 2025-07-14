import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import usePassGenerate from './hooks/usePassGenerate';
import PasswordStrength from './components/PasswordStrength';

function App() {
  const [length, setlength] = useState(4)
  const [checkboxdata, setcheckboxdata] = useState([{
    title: "include Uppercase", state: false
  },
  {
    title: "include Lowecase", state: false
  },
  {
    title: "include Numbers", state: false
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
  const { password, error, generatedpassword } = usePassGenerate()
  const [coppied, setcoppie] = useState(false)
  const handlecopy = () => {
    navigator.clipboard.writeText(password)
    setcoppie(true)
    setTimeout(() => {
      setcoppie(false)
    }, 1000);
  }

  return (
    <div className="container">
      {
        password &&
        (<div className='header'>
          <div className='title'>{password}</div>
          <button className='copybtn' onClick={handlecopy}>     {
            coppied ? "coppied" : "copy"
          }</button>
        </div>)
      }

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
      {error && <div className='errormesssage'>{error}</div>}
      {password&&<PasswordStrength password={password}></PasswordStrength>}
      <button className='passwordgenerate' onClick={() => generatedpassword(checkboxdata, length)}>Generate Password</button>
    </div>
  );
}

export default App;
