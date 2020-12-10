import React from 'react';
import './OHScoring.css';
import OHScoringHeader from './OHScoringHeader.js';
import OHScoringRows from './OHScoringRows.js';
import OHScoringTotals from './OHScoringTotals.js';

function OHScoring(props) {

    return (
        <div key="OHScoringDivMain" className="OhHellSetup">
            <div key="OHdivGameTitle">
                <label key="OHlabelGameNo" className="OhHellGameNo">{`Game No: ${props.gameNo}`}</label>
                <label key="OHlabelDealer" className="OhHellDealer">
                    {`Start Dealer: ${props.startDealer}`}
                </label>
                <label key="OHlabelSTD" className="OhHellSTD">
                    {`ScrewTD: ${props.screwTD}`}
                </label>
                <label key="OHlabelGameComm" className="OhHellGameComm">{`${props.gameComm}`}</label>
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