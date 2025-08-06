import React, { useEffect, useState } from 'react'

const Progressbar = ({ value = 0 }) => {
  const [percentage, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className='divvalue'>
      <div className="value">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
        <span className="progress-text">{percentage.toFixed()}%</span>
      </div>
    </div>
  )
}

export default Progressbar;
