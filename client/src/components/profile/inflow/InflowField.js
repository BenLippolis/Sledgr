import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input className="form-control"{...input} />
            <div className="text-danger">
                {touched && error}
            </div>
        </div>
    );
};
