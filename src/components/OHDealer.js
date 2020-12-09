import React from 'react';

function OHDealer(props) {

    let dealerOptions = [];
    for (let playerNo = 0; playerNo < props.listOfPlayers.length; playerNo++) {
        console.log("OHDealer: ")
        console.log("  option: " + `OHOptionDealer${playerNo}`);
        dealerOptions.push(
            <option 
                value={playerNo}
                // value={props.listOfPlayers[playerNo]}
                key={`OHOptionDealer${playerNo}`}>
                {props.listOfPlayers[playerNo]}
            </option>
        );
    }

    let dealerSelect =
        <div key="OHDealerDivChild">
            <label key="OHDealerSelectLabel" htmlFor="dealerSelect">Dealer: </label>
            <select
                key="OHDealerSelect" 
                name="dealerSelect"
                type="number"
                value={props.defValue}
                onChange={props.onChange}>
                    {dealerOptions}
            </select>            
        </div>

    return (
        <div key="OHDealerDivMain">
            {dealerSelect}
        </div>
    );
}

export default OHDealer;