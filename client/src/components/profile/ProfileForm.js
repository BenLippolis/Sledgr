import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import ProfileField from './ProfileField';
import { Link } from 'react-router-dom';
import formFields from './formFields';

class ProfileForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return (
                <Field key={name} component={ProfileField} type="text" label={label} name={name}/>
            );
        });
    }
    
    render() {
        return (    
            <div> 
                <form>
                    {this.renderFields()}
                    <Link to="/" className="btn btn-danger">
                        Cancel
                    </Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    _.each(formFields, ({name, noValueError}) => {
        if (!values[name]) {
            errors[name] = noValueError;
        }
    });

    return errors;
}

export default reduxForm({
    // form: tells redux how to manage the forms values inside the forms reducer 
    validate,
    form: 'profileForm',
    destroyOnUnmount: false
})(ProfileForm);