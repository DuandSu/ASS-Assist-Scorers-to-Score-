import React from 'react';
import './OhHell.css';

let maxCardsCheck = 51;
let passedInputNoPlayers = false;
let passedInputNoPlayerCards = false;
let screwTheDealer = false;

class OhHell extends React.Component {

    constructor(props) {
        super(props);
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.state = {
          msgArea: this.props.sMessageArea,
          inputGameNo: 11020,
          inputGameComm: "Feel free to enter FUN comments for this game!"
        };
    }

    onInputchange(event) {
      console.log("Handling Input Change:");
      console.log(event.target.name + "=" + event.target.value);
      
      this.setState({
        [event.target.name]: event.target.value
      });

      if (event.target.name === "checkScrewTD") {
        if (event.target.name.checked === true) screwTheDealer = true;
        else screwTheDealer = false;

        console.log("Screw the Dealer Flag: " + screwTheDealer);
        
        this.setState({
          checkScrewTD: screwTheDealer,
          msgArea: ""
        });
      }

      if (event.target.name === "inputNoPlayers") {
        if (event.target.value >= 2 && event.target.value <= 51) {
          let noCards = Math.floor(52 / event.target.value);
          if (52 % event.target.value === 0) noCards--;
          maxCardsCheck = noCards;

          this.setState({
            inputNoPlayerCards: noCards,
            msgArea: ""
          });
          passedInputNoPlayers = true;
          passedInputNoPlayerCards = true;
        }
        else {
          this.setState({
            msgArea: "Number of Players MUST be in the range 2 to 51"
          });
          passedInputNoPlayers = false;          
        }
      }

      if (event.target.name === "inputNoPlayerCards") {
        if (event.target.value > 1 && event.target.value <= maxCardsCheck) {
          this.setState({
            inputNoPlayerCards: event.target.value,
            msgArea: ""
          });
          passedInputNoPlayerCards = true;
        }
        else {
          this.setState({
            msgArea: `Number of Cards cannot be lower than 1 and cannot exceed ${maxCardsCheck} with chosen number of Players`
          });          
          passedInputNoPlayerCards = false;
        }
      }
    }
    
    onSubmitForm() {
      if (passedInputNoPlayers && passedInputNoPlayerCards) {
        console.log(this.state)
      }
      else {
        if (!passedInputNoPlayers) {
          this.setState({
            msgArea: `Correct error on Number of Players before creating`          
          });
        }
        else if (!passedInputNoPlayerCards) {
          this.setState({
            msgArea: `Correct error on Number of Cards per Player before creating`          
          });
        }      }
    }
    
    render() {

      const { items } = this.state;
      
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