import React from 'react';

function OHDealer(props) {

    let dealerOptions = [];
    for (let playerNo = 0; playerNo < props.listOfPlayers.length; playerNo++) {
        dealerOptions.push(
            <option 
                value={playerNo}
                key={`OHOptionDealer${playerNo}`}>
                {props.listOfPlayers[playerNo]}
            </option>
        );
    }

    let dealerSelect =
        <div>
            <label htmlFor="dealerSelect">Dealer: </label>
            <select
                name="dealerSelect"
                type="number"
                value={props.defValue}
                onChange={props.onChange}>
                    {dealerOptions}
            </select>            
        </div>

    return (
        <div>
            {dealerSelect}
        </div>
    );
}

export default OHDealer;