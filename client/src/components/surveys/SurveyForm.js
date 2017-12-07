import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

const FIELDS = [
    { label: 'Survey Title', name: 'title', noValueError: 'Must provide a title' },
    { label: 'Subject Line', name: 'subject', noValueError: 'Must provide a subject' },  
    { label: 'Email Body', name: 'body', noValueError: 'Must provide an email body'}
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return (
                <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
            );
        });
    }
    
    render() {
        return (    
            <div> 
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/" className="btn btn-danger">
                        Cancel
                    </Link>
                    <button className="btn btn-warning float-right" type="submit">Next</button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    _.each(FIELDS, ({name, noValueError}) => {
        if (!values[name]) {
            errors[name] = noValueError;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);