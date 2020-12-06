import React from 'react';

function OHScoringHeader(props) {

    let namesOH = [];
    for (let playerNo = 0; playerNo < props.listOfPlayers.length; playerNo++) {
        namesOH.push(
        <label key={`labelOHScoringNames${playerNo}`} className="OhHellTitleTB">{props.listOfPlayers[playerNo]}</label>
        );
    }

    let bidsTitleOH = [];
    for (let playerNo = 0; playerNo < props.listOfPlayers.length; playerNo++) {
        bidsTitleOH.push(
            <label key={`labelOHBidTitle${playerNo}`} className="OhHellTitleBB">Bid</label>
        );
        bidsTitleOH.push(
            <label key={`labelOHMadeTitle${playerNo}`}  className="OhHellTitleBB">Made</label>
        );
        bidsTitleOH.push(
            <label key={`labelOHPtsTitle${playerNo}`}  className="OhHellTitleBB">Points</label>
        );
    }

    let headerOH = [];
    headerOH.push(
        <div>
            <label className="OhHellTitleLTB">Round</label>
            <label className="OhHellTitle2TB">Cards</label>
            {namesOH}
            <label className="OhHellTitleTRB">Bid</label>
            <br></br>
            <label className="OhHellTitleLBB">Junk</label>
            <label className="OhHellTitle2BB">Junk</label>
            {bidsTitleOH}
            <label className="OhHellTitleRBB">Check</label>
            <br></br>
        </div>
    );

    return (
        <div>
            {headerOH}
        </div>
    );
}

export default OHScoringHeader;