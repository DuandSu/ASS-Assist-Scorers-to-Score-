import React from 'react';

function OHDealPattern(props) {

    let dealPatternSelect =
        <div>
            <label htmlFor="dealPatternSelect">Deal Pattern: </label>
            <select
                name="dealPatternSelect"
                type="text"
                value={props.defValue}
                onChange={props.onChange}>
                    <option value="H2L2H">{`${props.dispMaxCards}..1..${props.dispMaxCards}`}</option>
                    <option value="H2LL2H">{`${props.dispMaxCards}..1..1..${props.dispMaxCards}`}</option>
                    <option value="L2H2L">{`1..${props.dispMaxCards}..1`}</option>
                    <option value="L2HH2L">{`1..${props.dispMaxCards}..${props.dispMaxCards}..1`}</option>
                    <option value="H2L">{`${props.dispMaxCards}..1`}</option>
                    <option value="L2H">{`1..${props.dispMaxCards}`}</option>
            </select>            
        </div>

    return (
        <div>
            {dealPatternSelect}
        </div>
    );
}

export default OHDealPattern;