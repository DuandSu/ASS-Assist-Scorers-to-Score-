import React from 'react';
import './OhHell.css';
// import OHPlayerList from './OHPlayerList.js';

class OhHell extends React.Component {

    constructor(props) {
        super(props);
        this.maxCardsCheck = 51;
        this.passedInputNoPlayers = false;
        this.screwTheDealer = false;
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        // this.listOfPlayers = [];
        this.state = {
          msgArea: this.props.sMessageArea,
          inputGameNo: 11020,
          inputGameComm: "Feel free to enter FUN comments for this game!",
          inputPlayer: [],
        };
    }

    onInputchange(event) {
      console.log(event.target.name + "=" + event.target.value);
      this.setState({
        [event.target.name]: event.target.value
      });

      if (event.target.name === "checkScrewTD") {
        this.screwTheDealer = event.target.checked;
        this.setState({
          // checkScrewTD: this.screwTheDealer,
          msgArea: ""
        });
        console.log("Screw the Dealer Flag: " + this.screwTheDealer);
      }

      if (event.target.name === "inputNoPlayers") {
        if (event.target.value >= 2 && event.target.value <= 51) {
          let noCards = Math.floor(52 / event.target.value);
          if (52 % event.target.value === 0) noCards--;
          this.maxCardsCheck = noCards;

          let tmpInputPlayer = this.state.inputPlayer.slice(0, event.target.value-1);
          for (let playerNo = 0; playerNo < event.target.value; playerNo++) {
              // if (this.state.inputPlayer.length === 0)
              //     tmpInputPlayer[playerNo] = `Player ${playerNo+1}`;
              // else
                  tmpInputPlayer[playerNo] = this.state.inputPlayer[playerNo];

          }

          if (this.state.inputPlayer.length === 0) tmpInputPlayer[event.target.value-1] = "Dealer";
          
          this.setState({
            inputNoPlayerCards: noCards,
            msgArea: "",
            inputPlayer: tmpInputPlayer,
          });
          this.passedInputNoPlayers = true;
          this.passedInputNoPlayers = true;
        }
        else {
          this.setState({
            msgArea: "Number of Players MUST be in the range 2 to 51"
          });
          this.passedInputNoPlayers = false;          
        }
      }

      if (event.target.name.slice(0,10) === "inputPlayer") {
          let tmpInputPlayer = this.state.inputPlayer.slice(0);
          let playerNo = parseInt(event.target.name.slice(11));
          tmpInputPlayer[playerNo] = event.target.value;
          this.setState({
            inputPlayer: tmpInputPlayer,
          });
      }

      if (event.target.name === "inputNoPlayerCards") {
        if (event.target.value > 1 && event.target.value <= this.maxCardsCheck) {

          // this.listOfPlayers[0] = "Dealer";
          // this.listOfPlayers[event.target.value-1] = "Last Player";

          this.setState({
            inputNoPlayerCards: event.target.value,
            // inputPlayer[0]: this.listOfPlayers[0],
            msgArea: "",
          });
          this.passedInputNoPlayers = true;
        }
        else {
          this.setState({
            msgArea: `Number of Cards cannot be lower than 1 and cannot exceed ${this.maxCardsCheck} with chosen number of Players`
          });          
          this.passedInputNoPlayers = false;
        }
      }
    }
    
    onSubmitForm() {
      if (this.passedInputNoPlayers && this.passedInputNoPlayers) {
        console.log(this.state)
      }
      else {
        if (!this.passedInputNoPlayers) {
          this.setState({
            msgArea: `Correct error on Number of Players before creating`          
          });
        }
        else if (!this.passedInputNoPlayers) {
          this.setState({
            msgArea: `Correct error on Number of Cards per Player before creating`          
          });
        }      }
    }
    
    render() {

      // const { items } = this.state;

      let playerList = [];

      for (let playerNo = 0; playerNo < this.state.inputPlayer.length; playerNo++) {
          playerList.push(
              <div>
                  <br></br>
                  <label htmlFor={`inputPlayer${playerNo}`}>Enter Player {playerNo+1}: </label>
                  <input 
                      name={`inputPlayer${playerNo}`}
                      type="text"
                      value={this.state.inputPlayer[playerNo]}
                      onChange={this.onInputchange}>
                  </input>            
              </div>
          );
      }

      return (
        <div>
          <header className="App-Header">
            <button className="App-Buttons">Menu</button>
            <h1>Welcome to Oh Hell Scoring!</h1>
            <button className="App-Buttons">Login</button>
            <br></br>
          </header>
          <div className="OhHellSetup">
            <p>Game: Oh Hell!</p>
            <label htmlFor="inputGameNo">Game Number: </label>
            <input 
                name="inputGameNo" 
                type="number" 
                value={this.state.inputGameNo}
                onChange={this.onInputchange}>
            </input>
            <br></br>
            <br></br>
            <label htmlFor="inputGameComm">Game Comments: </label>
            <textarea
                name="inputGameComm" 
                type="text" 
                value={this.state.inputGameComm}
                onChange={this.onInputchange}>
            </textarea>
            <br></br>
            <br></br>
            <label htmlFor="checkScrewTD">Screw the Dealer?: </label>
            <input 
                name="checkScrewTD" 
                type="checkbox" 
                onChange={this.onInputchange}>
            </input>
            <br></br>
            <label htmlFor="inputNoPlayers">Enter Number of Players: </label>
            <input 
                name="inputNoPlayers" 
                type="number"
                value={this.state.inputNoPlayers}
                onChange={this.onInputchange}>
            </input>
            <br></br>
            <label htmlFor="inputNoPlayerCards">Enter Number of Cards Per Player: </label>
            <input 
                name="inputNoPlayerCards" 
                type="number"
                value={this.state.inputNoPlayerCards}
                onChange={this.onInputchange}>
            </input>
            {/* <OHPlayerList 
                NumberPlayers={this.state.inputNoPlayers}
                listOfPlayers={this.listOfPlayers}
              /> */}
            {playerList}
            <br></br>
            <button type="button" onClick={this.onSubmitForm}>Create</button>
            <button type="button" onClick={this.onSubmitForm}>Cancel</button>          
          </div>
          <div className="App-Games">
            <p className="Message-Area">{this.state.msgArea}</p>
          </div>
        </div>
      );
    }
}
    
export default OhHell;