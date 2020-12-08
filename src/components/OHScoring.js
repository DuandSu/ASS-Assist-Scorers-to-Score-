import React from 'react';
import './OHScoring.css';
import OHScoringHeader from './OHScoringHeader.js';
import OHScoringRows from './OHScoringRows.js';
import OHScoringTotals from './OHScoringTotals.js';

function OHScoring(props) {

    return (
        <div className="OhHellSetup">
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