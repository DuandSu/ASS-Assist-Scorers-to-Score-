import React from 'react';
import './OhHell.css';
import OHDealPattern from './OHDealPattern';
import OHPlayerList from './OHPlayerList.js';

class OhHell extends React.Component {

    constructor(props) {
        super(props);
        this.maxCardsCheck = 51;
        this.passedInputNoPlayers = false;
        this.screwTheDealer = false;
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        // this.listOfPlayers = [];
        this.state = {
          msgArea: this.props.sMessageArea,
          inputGameNo: 11020,
          inputGameComm: "Feel free to enter FUN comments for this game!",
          inputNoPlayers: 2,
          inputNoPlayerCards: 21,
          dealPatternSelect: "H2L2H",
          inputPlayer: [],
        };
    }

    onInputChange(event) {
        console.log(event.target.name + "=" + event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log("Event Target Name: " + event.target.name);
        console.log("Event Target Name[0-10]: " + event.target.name.slice(0,11));
        console.log("Event Target Value: " + event.target.value);
        // console.log("Event Target Value: " + event.target.value);
        //
        // Actions for change to Screw the Dealer Checkbox
        //
        if (event.target.name === "checkScrewTD") {
            this.screwTheDealer = event.target.checked;
            this.setState({
                // checkScrewTD: this.screwTheDealer,
                msgArea: ""
            });
            console.log("Screw the Dealer Flag: " + this.screwTheDealer);
        }

        //
        // Actions for change to Number of Players input.
        //
        else if (event.target.name === "inputNoPlayers") {
            if (event.target.value >= 2 && event.target.value <= 51) {
                let noCards = Math.floor(52 / event.target.value);
                if (52 % event.target.value === 0) noCards--;
                this.maxCardsCheck = noCards;

                let tmpInputPlayer = this.state.inputPlayer.slice(0, event.target.value-1);
                for (let playerNo = 0; playerNo < event.target.value; playerNo++) {
                    if (this.state.inputPlayer.length === 0)
                        tmpInputPlayer[playerNo] = `Player ${playerNo+1}`;
                    else
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
        //
        // Actions for change to Screw the Number of Cards per Player
        //
        else if (event.target.name === "inputNoPlayerCards") {
            if (event.target.value > 1 && event.target.value <= this.maxCardsCheck) {

                this.setState({
                    inputNoPlayerCards: event.target.value,
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
        //
        // Actions for Deal Pattern
        //
        else if (event.target.name === "dealPatternSelect"){
            this.setState({
                dealPatternSelect: event.target.value,
                msgArea: "",
            });          
        }
        //
        // Actions for change to the Players List
        //
        else if (event.target.name.slice(0,11) === "inputPlayer") {
            let tmpInputPlayer = this.state.inputPlayer.slice(0);
            let playerNo = parseInt(event.target.name.slice(11));
            tmpInputPlayer[playerNo] = event.target.value;
            console.log("Player List Set Player # " + playerNo + " = " + tmpInputPlayer[playerNo]);
            this.setState({
                inputPlayer: tmpInputPlayer,
            });
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
            }
        }
    }
    
    render() {

        // const { items } = this.state;

        // let dispMaxCards = this.state.inputNoPlayerCards ? this.state.inputNoPlayerCards : this.maxCardsCheck; 
        // let dealpatternSelect =
        //     <div>
        //         <label htmlFor="dealPatternSelect">Deal Pattern: </label>
        //         <select 
        //             name="dealPatternSelect"
        //             type="text"
        //             value={this.state.dealPatternSelect}
        //             onChange={this.onInputChange}>
        //                 <option value="H2L2H" key="H2L2H">{`${dispMaxCards}..1..${dispMaxCards}`}</option>
        //                 <option value="H2LL2H" key="H2LL2H">{`${dispMaxCards}..1..1..${dispMaxCards}`}</option>
        //                 <option value="L2H2L" key="L2H2L">{`1..${dispMaxCards}..1`}</option>
        //                 <option value="L2HH2L" key="L2HH2L">{`1..${dispMaxCards}..${dispMaxCards}..1`}</option>
        //                 <option value="H2L" key="H2L">{`${dispMaxCards}..1`}</option>
        //                 <option value="L2H" key="L2H">{`1..${dispMaxCards}`}</option>
        //         </select>            
        //     </div>

        // let playerList = [];

        // for (let playerNo = 0; playerNo < this.state.inputPlayer.length; playerNo++) {
        //     playerList.push(
        //         <div key={`divPlayerList${playerNo}`}>
        //             <label htmlFor={`inputPlayer${playerNo}`}>Enter Player {playerNo+1}: </label>
        //             <input 
        //                 name={`inputPlayer${playerNo}`}
        //                 type="text"
        //                 value={this.state.inputPlayer[playerNo]}
        //                 onChange={this.onInputChange}>
        //             </input>            
        //         </div>
        //     );
        // }

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
                        onChange={this.onInputChange}>
                    </input>
                    <br></br>
                    <br></br>
                    <label htmlFor="inputGameComm">Game Comments: </label>
                    <textarea
                        name="inputGameComm" 
                        type="text" 
                        value={this.state.inputGameComm}
                        onChange={this.onInputChange}>
                    </textarea>
                    <br></br>
                    <br></br>
                    <label htmlFor="checkScrewTD">Screw the Dealer? (Play with Hook?): </label>
                    <input 
                        name="checkScrewTD" 
                        type="checkbox" 
                        onChange={this.onInputChange}>
                    </input>
                    <br></br>
                    <label htmlFor="inputNoPlayers">Enter Number of Players: </label>
                    <input 
                        name="inputNoPlayers" 
                        type="number"
                        value={this.state.inputNoPlayers}
                        onChange={this.onInputChange}>
                    </input>
                    <br></br>
                    <label htmlFor="inputNoPlayerCards">Enter Number of Cards Per Player: </label>
                    <input 
                        name="inputNoPlayerCards" 
                        type="number"
                        value={this.state.inputNoPlayerCards}
                        onChange={this.onInputChange}>
                    </input>
                    {/* {dealpatternSelect} */}
                    <OHDealPattern
                        dispMaxCards={this.state.inputNoPlayerCards ? this.state.inputNoPlayerCards : this.maxCardsCheck}
                        defValue={this.state.dealPatternSelect}
                        onChange={this.onInputChange}
                        />
                    <br></br>
                    <OHPlayerList 
                        listOfPlayers={this.state.inputPlayer}
                        onChange={this.onInputChange}
                      />
                    {/* {playerList} */}
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