import React from 'react';
import './OHScoring.css';
// import OHDealPattern from './OHDealPattern';
import OHScoringHeader from './OHScoringHeader.js';
import OHScoringTotals from './OHScoringTotals.js';
// import OHDealer from './OHDealer.js';

function OHScoring(props) {

    let gameScoring =
        // <div className="OhHellSetup">
        <div>
            <label className="OhHellRowLB">1</label>
            <label className="OhHellRow">10</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">10</label>
            <label className="OhHellRow">1</label>
            <label className="OhHellRow">1</label>
            <label className="OhHellRow">11</label>
            <label className="OhHellRow">2</label>
            <label className="OhHellRow">2</label>
            <label className="OhHellRow">22</label>
            <label className="OhHellRow">3</label>
            <label className="OhHellRow">3</label>
            <label className="OhHellRow">33</label>
            <label className="OhHellRow">4</label>
            <label className="OhHellRow">4</label>
            <label className="OhHellRow">44</label>
            <label className="OhHellRow">5</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRowRB">+5</label>
            <br></br>

            <label className="OhHellRowLB">2</label>
            <label className="OhHellRow">9</label>
            <label className="OhHellRow">2</label>
            <label className="OhHellRow">2</label>
            <label className="OhHellRow">22</label>
            <label className="OhHellRow">2</label>
            <label className="OhHellRow">3</label>
            <label className="OhHellRow">3</label>
            <label className="OhHellRow">2</label>
            <label className="OhHellRow">1</label>
            <label className="OhHellRow">1</label>
            <label className="OhHellRow">2</label>
            <label className="OhHellRow">1</label>
            <label className="OhHellRow">2</label>
            <label className="OhHellRow">2</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">2</label>
            <label className="OhHellRow">2</label>
            <label className="OhHellRow">22</label>
            <label className="OhHellRowRB">+3</label>
            <br></br>
            
            <label className="OhHellRowLB">9</label>
            <label className="OhHellRow">2</label>
            <label className="OhHellRow">1</label>
            <label className="OhHellRow">2</label>
            <label className="OhHellRow">2</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">10</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">10</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">10</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">10</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">10</label>
            <label className="OhHellRowRB">-1</label>
            <br></br>

            <label className="OhHellRowLB">10</label>
            <label className="OhHellRow">1</label>
            <label className="OhHellRow">1</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">10</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">10</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">10</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">0</label>
            <label className="OhHellRow">10</label>
            <label className="OhHellRow">1</label>
            <label className="OhHellRow">1</label>
            <label className="OhHellRow">11</label>
            <label className="OhHellRowRB">+1</label>
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
        <div className="OhHellSetup">
            <OHScoringHeader 
                listOfPlayers={props.listOfPlayers}
            />
            {gameScoring}
            <OHScoringTotals 
                listOfPlayers={props.listOfPlayers}
            />
        </div>
    );
}

export default OHScoring;