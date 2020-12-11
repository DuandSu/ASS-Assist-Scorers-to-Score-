import React from 'react';

function OHPlayerList(props) {

    let playerList = [];

    for (let playerNo = 0; playerNo < props.listOfPlayers.length; playerNo++) {
        playerList.push(
            <div key={`OHDivPlayerList${playerNo}`}>
                <label htmlFor={`inputPlayer${playerNo}`}>Enter Player {playerNo+1}: </label>
                <input 
                    name={`inputPlayer${playerNo}`}
                    type="text"
                    value={props.listOfPlayers[playerNo]}
                    onChange={props.onChange}>
                </input>            
            </div>
        );
    }

    // playerList.push(<h1 key="1">Here is the List!</h1>);

    return (
        <div>
            {playerList}
        </div>
    );
}

export default OHPlayerList;