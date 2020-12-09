import React from 'react';
import OHDealPattern from './OHDealPattern';
import OHPlayerList from './OHPlayerList.js';
import OHDealer from './OHDealer.js';

function OHGameSetup(props) {

    let gameSetup =
        <div key="OHDivSetupForm" className="OhHellSetup">
            <p key="OHPGameSetup">Game: Oh Hell!</p>
            <label key="OHSetupLabelGameNo" htmlFor="inputGameNo">Game Number: </label>
            <input 
                key="TOHSetupInputGameNo" 
                name="inputGameNo" 
                type="number" 
                value={props.inputGameNo}
                onChange={props.onChange}>
            </input>
            <br key="OHSetupBr1"></br>
            <br key="OHSetupBr2"></br>
            <label key="OHSetupLabelGameComm" htmlFor="inputGameComm">Game Comments: </label>
            <textarea
                key="OHSetupTextGameComm"
                name="inputGameComm" 
                type="text" 
                value={props.inputGameComm}
                onChange={props.onChange}>
            </textarea>
            <br key="OHSetupBr3"></br>
            <br key="OHSetupBr4"></br>
            <label key="OHSetupLabelCheckScrewTD" htmlFor="checkScrewTD">Screw the Dealer? (Play with Hook?): </label>
            <input 
                key="OHSetupInputCheckScrewTD" 
                name="checkScrewTD" 
                type="checkbox" 
                onChange={props.onChange}>
            </input>
            <br key="OHSetupBr5"></br>
            <label key="OHSetupLabelNoPlayers" htmlFor="inputNoPlayers">Enter Number of Players: </label>
            <input 
                key="OHSetupInputNoPlayers" 
                name="inputNoPlayers" 
                type="number"
                value={props.inputNoPlayers}
                onChange={props.onChange}>
            </input>
            <br key="OHSetupBr6"></br>
            <label key="OHSetupLabelNoCards" htmlFor="inputNoPlayerCards">Enter Number of Cards Per Player: </label>
            <input 
                key="OHSetupInputNoPlayerCards" 
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
            <br key="OHSetupBr7"></br>
            <OHPlayerList 
                listOfPlayers={props.listOfPlayers}
                onChange={props.onChange}
            />
            <br key="OHSetupBr8"></br>
            {props.screwTD &&
            <div key="OHDivSetupDealer">
                <OHDealer
                    listOfPlayers={props.listOfPlayers}
                    onChange={props.onChange}
                />
                <br key="OHSetupBr9"></br>
            </div>
            }
            <button key="OHSetupBtCreate" id="idBtSetupCreate" type="button" onClick={props.onSubmit}>Create</button>
            <button key="OHSetupBtCancel" type="button" onClick={props.onCancel}>Cancel</button>          
        </div>

    return (
        <div key="OHDivSetupMain">
            {gameSetup}
        </div>
    );
}

export default OHGameSetup;