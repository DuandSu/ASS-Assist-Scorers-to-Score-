import React from 'react';
import './OhHell.css';
import OHGameSetup from './OHGameSetup';

class OhHell extends React.Component {

    constructor(props) {
        super(props);
        this.maxCardsCheck = 51;
        this.passedInputNoPlayers = false;
        this.screwTheDealer = false;
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
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
        //
        // Actions for change to Screw the Dealer Checkbox
        //
        if (event.target.name === "checkScrewTD") {
            this.screwTheDealer = event.target.checked;
            this.setState({
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
        // Actions for change to the Number of Cards per Player
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
        // Actions for change to Deal Pattern
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

        return (
            <div>
                <header className="App-Header">
                    <button className="App-Buttons">Menu</button>
                    <h1>Welcome to Oh Hell Scoring!</h1>
                    <button className="App-Buttons">Login</button>
                    <br></br>
                </header>
                <OHGameSetup 
                        inputGameNo={this.state.inputGameNo}
                        inputGameComm={this.state.inputGameComm}
                        inputNoPlayers={this.state.inputNoPlayers}
                        inputNoPlayerCards={this.state.inputNoPlayerCards}
                        dispMaxCards={this.state.inputNoPlayerCards ? this.state.inputNoPlayerCards : this.maxCardsCheck}
                        defValue={this.state.dealPatternSelect}
                        listOfPlayers={this.state.inputPlayer}
                        screwTD = {this.screwTheDealer}
                        onChange={this.onInputChange}
                        onSubmit={this.onSubmitForm}
                />
                <div className="App-Games">
                    <p className="Message-Area">{this.state.msgArea}</p>
                </div>
            </div>
        );
    }
}
    
export default OhHell;