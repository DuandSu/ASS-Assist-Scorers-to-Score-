import React from 'react';
import './OHScoring.css';
import OHScoringHeader from './OHScoringHeader.js';
import OHScoringRows from './OHScoringRows.js';
import OHScoringTotals from './OHScoringTotals.js';

function OHScoring(props) {

    return (
        <div className="OhHellSetup">
            <div>
                <label className="OhHellGameNo">{`Game No: ${props.gameNo}`}</label>
                <label className="OhHellDealer">{`Start Dealer: ${props.startDealer}`}</label>
                <label className="OhHellSTD">{`ScrewTD: ${props.screwTD}`}</label>
                <label className="OhHellGameComm">{`${props.gameComm}`}</label>
            </div>
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