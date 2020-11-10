import React, { useState } from 'react';

import './AssApp.css';
import Starter from './components/Starter.js';
import OhHell from './components/OhHell.js';

function AssApp() {
  const [messageArea, setMessage] = useState("Select the game you wish to score.");
  const [appKey, setAppKey] = useState("starter");

  const handleGameSelectClick = (e) => {

    console.log("Handling Click to start Oh Hell");
    const tmpAppKey = e.target.getAttribute("ikey");
    setMessage(`Time to Setup Scoring for ${tmpAppKey}`);
    setAppKey(tmpAppKey);

  }
  
  let output = [];
  if (appKey === "starter") {
    console.log("Executing Starter Again.")
    output.push(
      <Starter
        key="Starter" 
        sMessageArea={messageArea} 
        handleClick={(e) => handleGameSelectClick(e)}
      />);
  }
  else if (appKey === "Oh Hell") {
    console.log("Executing Oh Hell.")
    output.push(<OhHell key="OhHell" sMessageArea={messageArea}/>);
  }
  else {
    console.log("Executing Starter as Default.")
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
