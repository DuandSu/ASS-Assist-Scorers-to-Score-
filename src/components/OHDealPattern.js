import React from 'react';

function OHDealPattern(props) {

    let dealPatternSelect =
        <div key="OHDealerPatternDivChild">
            <label key="OHDealPatternSelectLabel" htmlFor="dealPatternSelect">Deal Pattern: </label>
            <select
                key="OHDealPatternSelect"
                name="dealPatternSelect"
                type="text"
                value={props.defValue}
                onChange={props.onChange}>
                    <option value="H2L2H" key="H2L2H">{`${props.dispMaxCards}..1..${props.dispMaxCards}`}</option>
                    <option value="H2LL2H" key="H2LL2H">{`${props.dispMaxCards}..1..1..${props.dispMaxCards}`}</option>
                    <option value="L2H2L" key="L2H2L">{`1..${props.dispMaxCards}..1`}</option>
                    <option value="L2HH2L" key="L2HH2L">{`1..${props.dispMaxCards}..${props.dispMaxCards}..1`}</option>
                    <option value="H2L" key="H2L">{`${props.dispMaxCards}..1`}</option>
                    <option value="L2H" key="L2H">{`1..${props.dispMaxCards}`}</option>
            </select>            
        </div>

    return (
        <div key="OHDealerPatternDivMain">
            {dealPatternSelect}
        </div>
    );
}

export default OHDealPattern;