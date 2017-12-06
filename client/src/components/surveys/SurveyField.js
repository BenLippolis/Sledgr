import React from 'react';

// input prop has a binch of build in event handlers 
// pass props.input to our field 
export default ({ input, label }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input className="form-control"{...input} />
        </div>
    );
};

