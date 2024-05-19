import React, { useState } from 'react';
import './index.css';


// Child component
const CircularProgressBar = ({ percentage }) => {
  const radius = 100;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;  // progress bar function

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
    >
      <circle
        stroke="lightgrey"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}      // centers the circle in the middle of the svg container
        cy={radius}
      />
      <circle
        stroke= {percentage < 75 ? "red" : "#00FF40"}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        strokeLinecap="square"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em" //vertical alignment of the text
        textAnchor="middle"
        fontSize="20px"
        fill="black"
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};


// Parent component 
function App() {
  const [percentage, setPercentage] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <CircularProgressBar percentage={percentage} />
        <input
          type="range"
          min="0"
          max="100"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        />
      </header>
    </div>
  );
}

export default App;
