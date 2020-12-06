import React from 'react';

function OHScoringTotals(props) {

    let totalsOH = 
        <div>
            <label className="OhHellTotalsLBB">Total</label>
            <label className="OhHellTotals2BB">Junk</label>
            <label className="OhHellTotals2BB">Junk</label>
            <label className="OhHellTotals2BB">Junk</label>
            <label className="OhHellTotalsBB">34</label>
            <label className="OhHellTotals2BB">Junk</label>
            <label className="OhHellTotals2BB">Junk</label>
            <label className="OhHellTotalsBB">34</label>
            <label className="OhHellTotals2BB">Junk</label>
            <label className="OhHellTotals2BB">Junk</label>
            <label className="OhHellTotalsBB">43</label>
            <label className="OhHellTotals2BB">Junk</label>
            <label className="OhHellTotals2BB">Junk</label>
            <label className="OhHellTotalsBB">55</label>
            <label className="OhHellTotals2BB">Junk</label>
            <label className="OhHellTotals2BB">Junk</label>
            <label className="OhHellTotalsBB">64</label>
            <label className="OhHellTotals2BB">Junk</label>
            <label className="OhHellTotals2BB">Junk</label>
            <label className="OhHellTotalsBB">43</label>
            <label className="OhHellTotalsRBB">Junk</label>
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
            {totalsOH}
        </div>
    );
}

export default OHScoringTotals;