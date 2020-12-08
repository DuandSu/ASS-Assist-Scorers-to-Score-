import React from 'react';

function OHScoringRows(props) {

    let rowsOH = [];

    for (let roundIdx = 0; roundIdx < props.game.deals.length; roundIdx++) {
        console.log("Round No: " + props.game.deals[roundIdx].roundNo);
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
            // rowsOH.push(
            //     <label ***** Change to Input
            //         key={`labelOHBidRow${roundIdx}a${playerIdx}`} 
            //         className="OhHellRow">
            //             {props.game.getPlayerBid(roundIdx + 1, playerIdx + 1) === null 
            //             ? "---"
            //             : props.game.getPlayerBid(roundIdx + 1, playerIdx + 1)}
            //     </label>
            // );
            // rowsOH.push(
            //     <label 
            //         key={`labelOHMadeRow${roundIdx}a${playerIdx}`} 
            //         className="OhHellRow">
            //             {props.game.getPlayerMade(roundIdx + 1, playerIdx + 1) === null
            //             ? "---"
            //             : props.game.getPlayerMade(roundIdx + 1, playerIdx + 1)}
            //     </label>
            // );
            rowsOH.push(
            <label key={`labelOHPtsRow${roundIdx}a${playerIdx}`} className="OhHellRow">{props.game.getPlayerRoundScore(roundIdx + 1, playerIdx + 1)}</label>
            );
        }
        rowsOH.push(
            <label key={`labelOHBidChkRow${roundIdx}`} className="OhHellRowRB">{props.game.getTotalBidAmt(roundIdx + 1) - props.game.deals[roundIdx].cardsDealt}</label>
        );
        rowsOH.push(
            <br></br>
        );
    }

    let rowsOH2 = 
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

    return (
        <div>
            {rowsOH}
        </div>
    );
}

export default OHScoringRows;