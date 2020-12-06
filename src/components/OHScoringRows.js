import React from 'react';

function OHScoringRows(props) {

    let rowsOH = 
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

    // header1.push(
    //     <div>
    //     </div>
    // );
    // for (let playerNo = 0; playerNo < props.listOfPlayers.length; playerNo++) {
    //     playerList.push(
    //         <div key={`divPlayerList${playerNo}`}>
    //             <label htmlFor={`inputPlayer${playerNo}`}>Enter Player {playerNo+1}: </label>
    //             <input 
    //                 name={`inputPlayer${playerNo}`}
    //                 type="text"
    //                 value={props.listOfPlayers[playerNo]}
    //                 onChange={props.onChange}>
    //             </input>            
    //         </div>
    //     );
    // }

    return (
        <div>
            {rowsOH}
        </div>
    );
}

export default OHScoringRows;