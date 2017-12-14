import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import ProfileField from './ProfileField';
import { Link } from 'react-router-dom';
import formFields from './formFields';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';


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
                    <button 
                        className="btn btn-success float-right"
                        type="submit">
                        Create Profile
                    </button>
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
    validate,
    form: 'profileForm'
})(ProfileForm);

