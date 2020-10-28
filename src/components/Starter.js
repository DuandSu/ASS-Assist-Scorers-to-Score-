import React from 'react';

import ohHell from './oh_hell_1024x1024.webp';

function Starter(props) {

    return (
      <div>
        <header className="App-Header">
          <button className="App-Buttons">Menu</button>
          <h1>Welcome to the ASS (Assist Scorers to Score) App!</h1>
          <button className="App-Buttons">Login</button>
          <br></br>
        </header>
        <div className="App-Games">
          <h3>Choose from the following Games:</h3>
          <h4>Oh Hell!</h4>
          <img src={ohHell} className="App-Logo1" alt="ohHell" ikey="Oh Hell" onClick={props.handleClick}/>
          <p className="Message-Area">{props.sMessageArea}</p>
        </div>
      </div>
    );
}
    
export default Starter;