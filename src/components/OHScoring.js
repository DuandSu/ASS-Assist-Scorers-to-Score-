import React from 'react';
import './OHScoring.css';
// import OHDealPattern from './OHDealPattern';
// import OHPlayerList from './OHPlayerList.js';
// import OHDealer from './OHDealer.js';

function OHScoring(props) {

    let gameScoring =
        <div className="OhHellSetup">
            <p>Game: Oh Hell!</p>
            <label className="OhHellTitle1">Round</label>
            <label className="OhHellTitle1">Player1</label>
            <label className="OhHellTitle1">Bid</label>
            <label className="OhHellTitle1">Made</label>
            <label className="OhHellTitle1">Points</label>
            <label className="OhHellTitle1">Player2</label>
            <label className="OhHellTitle1">Bid</label>
            <label className="OhHellTitle1">Made</label>
            <label className="OhHellTitle1">Points</label>
            <label className="OhHellTitle1">Player3</label>
            <label className="OhHellTitle1">Bid</label>
            <label className="OhHellTitle1">Made</label>
            <label className="OhHellTitle1">Points</label>
            <label className="OhHellTitle1">Player4</label>
            <label className="OhHellTitle1">Bid</label>
            <label className="OhHellTitle1">Made</label>
            <label className="OhHellTitle1">Points</label>
            <label className="OhHellTitle1">Player5</label>
            <label className="OhHellTitle1">Bid</label>
            <label className="OhHellTitle1">Made</label>
            <label className="OhHellTitle1">Points</label>
            <label className="OhHellTitle1">Player6</label>
            <label className="OhHellTitle1">Bid</label>
            <label className="OhHellTitle1">Made</label>
            <label className="OhHellTitle1">Points</label>
            <br></br>

            <label className="OhHellTitle1">1</label>
            <label className="OhHellTitle1">Cory</label>
            <label className="OhHellTitle1">Bid</label>
            <label className="OhHellTitle1">Made</label>
            <label className="OhHellTitle1">Points</label>
            <label className="OhHellTitle1">Scott</label>
            <label className="OhHellTitle1">Bid</label>
            <label className="OhHellTitle1">Made</label>
            <label className="OhHellTitle1">Points</label>
            <label className="OhHellTitle1">Leanne</label>
            <label className="OhHellTitle1">Bid</label>
            <label className="OhHellTitle1">Made</label>
            <label className="OhHellTitle1">Points</label>
            <label className="OhHellTitle1">Murray</label>
            <label className="OhHellTitle1">Bid</label>
            <label className="OhHellTitle1">Made</label>
            <label className="OhHellTitle1">Points</label>
            <label className="OhHellTitle1">Suzanne</label>
            <label className="OhHellTitle1">Bid</label>
            <label className="OhHellTitle1">Made</label>
            <label className="OhHellTitle1">Points</label>
            <label className="OhHellTitle1">Duane</label>
            <label className="OhHellTitle1">Bid</label>
            <label className="OhHellTitle1">Made</label>
            <label className="OhHellTitle1">Points</label>
            <br></br>

        </div>
        // <input 
        // <label htmlFor="inputGameNo">Game Number: </label>
        //         name="inputGameNo" 
        //         type="number" 
        //         value={props.inputGameNo}
        //         onChange={props.onChange}>
        //     </input>
        //     <br></br>
        //     <br></br>
        //     <label htmlFor="inputGameComm">Game Comments: </label>
        //     <textarea
        //         name="inputGameComm" 
        //         type="text" 
        //         value={props.inputGameComm}
        //         onChange={props.onChange}>
        //     </textarea>
        //     <br></br>
        //     <br></br>
        //     <label htmlFor="checkScrewTD">Screw the Dealer? (Play with Hook?): </label>
        //     <input 
        //         name="checkScrewTD" 
        //         type="checkbox" 
        //         onChange={props.onChange}>
        //     </input>
        //     <br></br>
        //     <label htmlFor="inputNoPlayers">Enter Number of Players: </label>
        //     <input 
        //         name="inputNoPlayers" 
        //         type="number"
        //         value={props.inputNoPlayers}
        //         onChange={props.onChange}>
        //     </input>
        //     <br></br>
        //     <label htmlFor="inputNoPlayerCards">Enter Number of Cards Per Player: </label>
        //     <input 
        //         name="inputNoPlayerCards" 
        //         type="number"
        //         value={props.inputNoPlayerCards}
        //         onChange={props.onChange}>
        //     </input>
        //     <OHDealPattern
        //         dispMaxCards={props.dispMaxCards}
        //         defValue={props.defValue}
        //         onChange={props.onChange}
        //     />
        //     <br></br>
        //     <OHPlayerList 
        //         listOfPlayers={props.listOfPlayers}
        //         onChange={props.onChange}
        //     />
        //     <br></br>
        //     {props.screwTD &&
        //     <div>
        //         <OHDealer
        //             listOfPlayers={props.listOfPlayers}
        //             onChange={props.onChange}
        //         />
        //         <br></br>
        //     </div>
        //     }
        //     <button type="button" onClick={props.onSubmit}>Create</button>
        //     <button type="button" onClick={props.onSubmit}>Cancel</button>          


    return (
        <div>
            {gameScoring}
        </div>
    );
}

export default OHScoring;