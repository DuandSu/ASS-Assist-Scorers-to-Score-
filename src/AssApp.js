import React, { useState } from 'react';

import './AssApp.css';
import Starter from './components/Starter.js';
import OhHell from './components/OhHell.js';

function AssApp() {
  const [messageArea, setMessage] = useState("Select the game you wish to score.");
  const [appKey, setAppKey] = useState("starter");

  const handleGameSelectClick = (e) => {

    const tmpAppKey = e.target.getAttribute("ikey");
    setMessage(`Time to Setup Scoring for ${tmpAppKey}`);
    setAppKey(tmpAppKey);

  }
  
  const handleReturntoMain = (e) => {
    setAppKey("starter");
  }

  let output = [];
  if (appKey === "starter") {
    output.push(
      <Starter
        key="Starter" 
        sMessageArea={messageArea} 
        handleClick={(e) => handleGameSelectClick(e)}
      />);
  }
  else if (appKey === "Oh Hell") {
    output.push(
      <OhHell 
        key="OhHell" 
        sMessageArea="Select your options then click Create button to start scoring your game!"
        handleReturntoMain={(e) => handleReturntoMain(e)}
      />);
  }
  else {
    output.push(
    <Starter 
      key="Starter" 
      sMessageArea={messageArea} 
      handleClick={(e) => handleGameSelectClick(e)}
    />);
  }

  return (
    <div>
      {output}
    </div>
  );
}

export default AssApp;
