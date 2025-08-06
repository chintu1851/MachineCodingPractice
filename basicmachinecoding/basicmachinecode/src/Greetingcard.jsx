import React from 'react'
import { useState } from 'react';
const Greetingcard = () => {
    const [hello, setHello] = useState('');
    const [submittedname,setsubmittedname] = useState('')
    const hellobutton = () => {
        if(hello.trim()){
            setsubmittedname(hello)
        }
        else{
            setsubmittedname(null)
        }
    }
    return (
        <div>
            <input type='name' name='hello' value={hello} onChange={(e) => setHello(e.target.value)}></input>
            <button onClick={hellobutton}>Submit</button>
            {
                submittedname?(<h2>Hello {submittedname}</h2>):(<h3>Please Enter Name</h3>)
            }
        </div>
    )
}

export default Greetingcard
