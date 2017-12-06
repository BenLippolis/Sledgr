import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },  
    { label: 'Email Body', name: 'body' }
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
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to="/" className="btn btn-danger">
                        Cancel
                    </Link>
                    <button className="btn btn-warning float-right" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);