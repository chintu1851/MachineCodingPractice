import './App.css';
import React, { useEffect, useState } from 'react';
import Progressbar from './component/Progressbar';

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((val) => val + 1);
    }, 100);

    // return () => clearInterval(interval); // clean up
  }, []);

  return (
    <div className="App">
      <Progressbar value={value} />
    </div>
  );
}

export default App;
