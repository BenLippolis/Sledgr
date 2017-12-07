import React from 'react';

const SurveyFormReview = ({ onCancel }) => {
    return (    
        <div> 
            <h3> Survey Form Review </h3>
            <button 
                className="btn btn-danger"
                onClick={onCancel}
            >
            Back
            </button>
        </div>
    );
};

export default SurveyFormReview;