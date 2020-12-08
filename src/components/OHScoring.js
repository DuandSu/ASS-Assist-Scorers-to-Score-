import React from 'react';
import './OHScoring.css';
// import OHDealPattern from './OHDealPattern';
import OHScoringHeader from './OHScoringHeader.js';
import OHScoringRows from './OHScoringRows.js';
import OHScoringTotals from './OHScoringTotals.js';
// import OHDealer from './OHDealer.js';

function OHScoring(props) {

    let gameScoring =
        // <div className="OhHellSetup">
        <div>

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
        <div className="OhHellSetup">
            <OHScoringHeader 
                listOfPlayers={props.game.listOfPlayers}
            />
            <OHScoringRows 
                game={props.game}
                onChange={props.onChange}
            />
            <OHScoringTotals 
                game={props.game}
            />
        </div>
    );
}

export default OHScoring;