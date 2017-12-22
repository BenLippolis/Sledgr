import React, { Component } from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import OutflowField from './OutflowField';
import { Link, withRouter } from 'react-router-dom';
import formFields from './formFields';
import { connect } from 'react-redux';
import * as actions from '../../../actions';


class OutflowForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return(
                <Field key={name} component={OutflowField} type="text" label={label} name={name} />
            );
        });
    }

    onSubmit(values) {
        this.props.submitOutflow(values, this.props.history);
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                {this.renderFields()}
                <Link to="/" className="btn btn-danger">
                    Cancel
                </Link>
                <button 
                    className="btn btn-primary float-right"
                    type="submit">
                    Record Outflow
                </button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    _.each(formFields, ({ name, noValueError}) => {
        if (!values[name]) {
            errors[name] = noValueError;
        }
    });
    return errors;
}

export default reduxForm({
    validate,
    form: 'outflowForm'
})(
    connect(null, actions)(withRouter(OutflowForm))
);