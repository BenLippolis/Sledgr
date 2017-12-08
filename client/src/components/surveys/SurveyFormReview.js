import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, field => {
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>
                    {formValues[field.name]}
                </div>
            </div>
        );
    });

    return (    
        <div> 
            <h3> Please Confirm Survey Fields </h3>
            {reviewFields}
            
            <button className="btn btn-danger" onClick={onCancel}>
                Back
            </button>
            <button 
                onClick={() => submitSurvey(formValues, history)}
                className="btn btn-success float-right">
                Send Survey
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    // Return form field values added to props
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));