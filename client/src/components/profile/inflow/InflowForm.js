import React, { Component } from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import InflowField from './InflowField';
import { Link, withRouter } from 'react-router-dom';
import formFields from './formFields';
import { connect } from 'react-redux';
import * as actions from '../../../actions';


class InflowForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return(
                <Field key={name} component={InflowField} type="text" label={label} name={name} />
            );
        });
    }

    onSubmit(values) {
        this.props.submitInflow(values, this.props.history);
    }

    render() {
        const { handleSubmit } = this.props;
        
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                {this.renderFields()}
                <Link to="/" className="btn btn-sm btn-danger">
                    Cancel
                </Link>
                <button 
                    className="btn btn-primary btn-sm float-right"
                    type="submit">
                    Add Inflow
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
    form: 'inflowForm'
})(
    connect(null, actions)(withRouter(InflowForm))
);