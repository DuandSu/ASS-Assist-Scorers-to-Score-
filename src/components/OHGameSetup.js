import React from 'react';
import OHDealPattern from './OHDealPattern';
import OHPlayerList from './OHPlayerList.js';
import OHDealer from './OHDealer.js';

function OHGameSetup(props) {

    let gameSetup =
        <div className="OhHellSetup">
            <p>Game: Oh Hell!</p>
            <label htmlFor="inputGameNo">Game Number: </label>
            <input 
                name="inputGameNo" 
                type="number" 
                value={props.inputGameNo}
                onChange={props.onChange}>
            </input>
            <br></br>
            <br></br>
            <label htmlFor="inputGameComm">Game Comments: </label>
            <textarea
                name="inputGameComm" 
                type="text" 
                value={props.inputGameComm}
                onChange={props.onChange}>
            </textarea>
            <br></br>
            <br></br>
            <label htmlFor="checkScrewTD">Screw the Dealer? (Play with Hook?): </label>
            <input 
                name="checkScrewTD" 
                type="checkbox" 
                onChange={props.onChange}>
            </input>
            <br></br>
            <label htmlFor="inputNoPlayers">Enter Number of Players: </label>
            <input 
                name="inputNoPlayers" 
                type="number"
                value={props.inputNoPlayers}
                onChange={props.onChange}>
            </input>
            <br></br>
            <label htmlFor="inputNoPlayerCards">Enter Number of Cards Per Player: </label>
            <input 
                name="inputNoPlayerCards" 
                type="number"
                value={props.inputNoPlayerCards}
                onChange={props.onChange}>
            </input>
            <OHDealPattern
                dispMaxCards={props.dispMaxCards}
                defValue={props.defValue}
                onChange={props.onChange}
            />
            <br></br>
            <OHPlayerList 
                listOfPlayers={props.listOfPlayers}
                onChange={props.onChange}
            />
            <br></br>
            {props.screwTD &&
            <div>
                <OHDealer
                    listOfPlayers={props.listOfPlayers}
                    onChange={props.onChange}
                />
                <br></br>
            </div>
            }
            <button type="button" onClick={props.onSubmit}>Create</button>
            <button type="button" onClick={props.onSubmit}>Cancel</button>          
        </div>

    return (
        <div>
            {gameSetup}
        </div>
    );
}

export default OHGameSetup;