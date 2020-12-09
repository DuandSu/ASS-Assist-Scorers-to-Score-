import React from 'react';

function OHScoringRows(props) {

    let rowsOH = [];

    for (let roundIdx = 0; roundIdx < props.game.deals.length; roundIdx++) {
        rowsOH.push(
        <label key={`labelOHRoundRow${roundIdx}`} className="OhHellRowLB">{props.game.deals[roundIdx].roundNo}</label>
        );
        rowsOH.push(
            <label key={`labelOHNoCardsRow${roundIdx}`} className="OhHellRow">{props.game.deals[roundIdx].cardsDealt}</label>
        );
        for (let playerIdx = 0; playerIdx < props.game.listOfPlayers.length; playerIdx++) {
            rowsOH.push(
                <input 
                    key={`inputOHBidRow${roundIdx}z${playerIdx}`}
                    className="OhHellRowInp" 
                    name={`inputOHBidRow${roundIdx}z${playerIdx}`} 
                    type="number"
                    value={props.game.getPlayerBid(roundIdx + 1, playerIdx + 1) === null 
                        ? 0
                        : props.game.getPlayerBid(roundIdx + 1, playerIdx + 1)}
                    onChange={props.onChange}>
                </input>
            );
            rowsOH.push(
                <input 
                    key={`inputOHMadeRow${roundIdx}z${playerIdx}`}
                    className="OhHellRowInp" 
                    name={`inputOHMadeRow${roundIdx}z${playerIdx}`} 
                    type="number"
                    value={props.game.getPlayerMade(roundIdx + 1, playerIdx + 1) === null
                        ? 0
                        : props.game.getPlayerMade(roundIdx + 1, playerIdx + 1)}
                    onChange={props.onChange}>
                </input>
            );
            rowsOH.push(
            <label key={`labelOHPtsRow${roundIdx}a${playerIdx}`} className="OhHellRow">{props.game.getPlayerRoundScore(roundIdx + 1, playerIdx + 1)}</label>
            );
        }
        rowsOH.push(
            <label key={`labelOHBidChkRow${roundIdx}`} className="OhHellRowRB">{props.game.getTotalBidAmt(roundIdx + 1) - props.game.deals[roundIdx].getCardsDealt()}</label>
        );
        rowsOH.push(
            <br key={`brOHRoundRow${roundIdx}`}></br>
        );
    }

    return (
        <div key="OHRowsDivMain">
            {rowsOH}
        </div>
    );
}

export default OHScoringRows;