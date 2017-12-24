import React, { Component } from 'react';
import _ from 'lodash';
import { reduxForm, Field, reset } from 'redux-form';
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
        this.props.reset()
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="row">
                    {this.renderFields()}
                    <div className="col-md-4">
                        <button 
                            className="btn btn-sm btn-primary"
                            type="submit">
                            Add Outflow
                        </button>
                    </div>
                </div>
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