import React from 'react';

function OHPlayerList(props) {

    let playerList = [];

    for (let playerNo = 0; playerNo < props.listOfPlayers.length; playerNo++) {
        console.log("OHPlayerList: ")
        console.log("    div: " + `OHDivPlayerList${playerNo}`);
        console.log("  label: " + `OHPLLabelPlayer${playerNo}`);
        console.log("  input: " + `OHPLLabelPlayer${playerNo}`);
        playerList.push(
            <div key={`OHDivPlayerList${playerNo}`}>
                <label key="{`OHPLLabelPlayer${playerNo}`}" htmlFor={`inputPlayer${playerNo}`}>Enter Player {playerNo+1}: </label>
                <input 
                    key="{`OHPLInputPlayer${playerNo}`}"
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
        <div key="OHPlayerListDivMain">
            {playerList}
        </div>
    );
}

export default OHPlayerList;