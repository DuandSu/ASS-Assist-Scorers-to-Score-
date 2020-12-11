import React from 'react';

function OHScoringTotals(props) {

    let sumsOH = [];
    for (let playerNo = 0; playerNo < props.game.listOfPlayers.length; playerNo++) {
        sumsOH.push(
            <label key={`labelOHBidSums${playerNo}`} className="OhHellTotals2BB">Junk</label>
        );
        sumsOH.push(
            <label key={`labelOHMadeSums${playerNo}`} className="OhHellTotals2BB">Junk</label>
        );
        sumsOH.push(
        <label key={`labelOHPtsSums${playerNo}`} className="OhHellTotalsBB">{props.game.getPlayerTotalScore(playerNo + 1)}</label>
        );
    }

    let totalsOH = [];
    totalsOH.push(
        <div key="OHTotalsDivChild">
            <label className="OhHellTotalsLBB">Total</label>
            <label className="OhHellTotals2BB">Junk</label>
            {sumsOH}
            <label className="OhHellTotalsRBB">Junk</label>
            <br></br>
        </div>
    );

    return (
        <div>
            {totalsOH}
        </div>
    );
}

export default OHScoringTotals;