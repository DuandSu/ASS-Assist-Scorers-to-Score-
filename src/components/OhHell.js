import React from 'react';
import './OhHell.css';
import OHGameSetup from './OHGameSetup';
import OHScoring from './OHScoring';
import gameOH from '../scripts/gameOH.js';

class OhHell extends React.Component {

    constructor(props) {
        super(props);
        this.OHGame = {};
        this.maxCardsCheck = 51;
        this.passedInputNoPlayers = false;
        this.screwTheDealer = false;
        this.onInputChangeSetup = this.onInputChangeSetup.bind(this);
        this.onSubmitFormSetup = this.onSubmitFormSetup.bind(this);
        this.onInputChangeScoring = this.onInputChangeScoring.bind(this);
        this.onSubmitScores = this.onSubmitScores.bind(this);
        this.state = {
            OHMode: "Setup",
            msgArea: this.props.sMessageArea,
            inputGameNo: 11020,
            inputGameComm: "Feel free to enter FUN comments for this game!",
            inputNoPlayers: 2,
            inputNoPlayerCards: 21,
            dealPatternSelect: "H2L2H",
            dealerSelect: 0,
            inputPlayer: [],
        };
    }

    onInputChangeSetup(event) {
        console.log(event.target.name + "=" + event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
        //
        // Actions for change to Screw the Dealer Checkbox
        //
        if (event.target.name === "checkScrewTD") {
            this.screwTheDealer = event.target.checked;
            this.setState({
                msgArea: ""
            });
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
            this.setState({
                inputPlayer: tmpInputPlayer,
            });
        }
    }
    
    onSubmitFormSetup(event) {
        // if (event.target.name.slice(0,11) === "inputPlayer") {
        if (event.target.id === "idBtSetupCreate") {
            if (this.passedInputNoPlayers && this.passedInputNoPlayers) {

                this.OHGame = new gameOH.GameOH (
                    this.state.inputGameNo,
                    this.state.inputGameComm, 
                    this.screwTheDealer, 
                    parseInt(this.state.inputNoPlayers),
                    this.state.inputNoPlayerCards, 
                    this.state.dealPatternSelect, 
                    this.state.inputPlayer,
                    true, // Set default bids to 0.
                    parseInt(this.state.dealerSelect) + 1);

                this.setState({
                    OHMode: "Scoring"          
                });            
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
    }

    onInputChangeScoring(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

        this.setState({
            msgArea: ""
        });     

        if (event.target.name.slice(0,13) === "inputOHBidRow") {
            const aDiv = event.target.name.indexOf("z");
            const roundNo = (parseInt(event.target.name.slice(13, aDiv))) + 1
            const playerNo = parseInt(event.target.name.slice(aDiv+1)) + 1;
            const bid = parseInt(event.target.value);
            
            const result = this.OHGame.updatePlayerBid(roundNo, playerNo, bid);

            const dealer = this.OHGame.getDealer(roundNo);
            const dealerName = this.OHGame.getPlayerName(dealer, "PLAYERNO")

            let dealerBid = this.OHGame.getPlayerBid(roundNo, dealer);
            if (dealerBid === null) dealerBid = 0;

            if (result === -2) {
                this.setState({
                    msgArea: `Players cannot bid more than number of cards dealt (${this.OHGame.deals[roundNo - 1].getCardsDealt()})`
                });                
            }
            else if (result === -3) {
                this.setState({
                    msgArea: `Dealer ${dealerName} cannot bid ${this.OHGame.deals[roundNo].getCardsDealt() - this.OHGame.getTotalBidAmt(roundNo) + bid}`
                });
            }
            else if (this.OHGame.isScrewTD()) {
                if (
                    !this.OHGame.checkPlayerBid(
                        roundNo, 
                        dealer, 
                        dealerBid
                    )) {
                    this.setState({
                        msgArea: `Dealer ${dealerName} cannot bid ${dealerBid}`
                    });
                }
            }

        }
        else if (event.target.name.slice(0,14) === "inputOHMadeRow") {
            const aDiv = event.target.name.indexOf("z");
            const roundNo = (parseInt(event.target.name.slice(14, aDiv))) + 1
            const playerNo = parseInt(event.target.name.slice(aDiv+1)) + 1;
            const made = parseInt(event.target.value);

            const result = this.OHGame.updatePlayerMade(roundNo, playerNo, made);
            if (result === -2) {
                this.setState({
                    msgArea: `Tricks made cannot exceed the number of cards dealt (${this.OHGame.deals[roundNo - 1].getCardsDealt()})`
                });                
            }
            console.log("Made: " + made);
            this.OHGame.updateAllScores(roundNo); // Works but inefficient. Create updatePlayerScore.
        }
    }
        
    onSubmitScores(event) {
        if (event.target.id === "idBtScoringExit") {
            console.log("Save the scored game!")
            const OHGameJSON = JSON.stringify(this.OHGame);
            console.log(OHGameJSON);
        }
    }

    render() {
        
        let OHComp = [];
        if (this.state.OHMode === "Setup") {
            OHComp.push(
                <OHGameSetup key="OHGameSetup"
                    inputGameNo={this.state.inputGameNo}
                    inputGameComm={this.state.inputGameComm}
                    inputNoPlayers={this.state.inputNoPlayers}
                    inputNoPlayerCards={this.state.inputNoPlayerCards}
                    dispMaxCards={this.state.inputNoPlayerCards ? this.state.inputNoPlayerCards : this.maxCardsCheck}
                    defValue={this.state.dealPatternSelect}
                    listOfPlayers={this.state.inputPlayer}
                    screwTD = {this.screwTheDealer}
                    onChange={this.onInputChangeSetup}
                    onSubmit={this.onSubmitFormSetup}
                    onCancel={this.props.handleReturntoMain}
                />);
        }
        else if (this.state.OHMode === "Scoring") {
            OHComp.push(
                <OHScoring key="OHScoring"
                        game={this.OHGame}
                        gameNo={this.state.inputGameNo}
                        gameComm={this.state.inputGameComm}
                        startDealer={this.OHGame.getPlayerName(this.OHGame.getDealer(1), "PLAYERNO")}
                        screwTD={this.screwTheDealer}
                        onChange={this.onInputChangeScoring}
                        onSubmit={this.onSubmitScores}
                        onCancel={this.props.handleReturntoMain}                        
                />);
        }
        else OHComp.push(<div></div>);

        return (
            <div>
                <header className="App-Header">
                    <button className="App-Buttons">Menu</button>
                    <h1>Welcome to Oh Hell Scoring!</h1>
                    <button className="App-Buttons">Login</button>
                    <br></br>
                </header>
                {OHComp}
                <div className="App-Games">
                    <p className="Message-Area">{this.state.msgArea}</p>
                </div>
            </div>
        );
    }
}
    
export default OhHell;