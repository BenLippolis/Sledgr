import React, { Component } from 'react'
import _ from 'lodash'
import { reduxForm, Field } from 'redux-form'
import InflowField from './InflowField'
import { withRouter } from 'react-router-dom'
import formFields from './formFields'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import './styles/InflowForm.css'

class InflowForm extends Component {
  renderFields () {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={InflowField}
          type='text'
          label={label}
          name={name}
        />
      )
    })
  }

  onSubmit (values) {
    this.props.submitInflow(values, this.props.history)
    this.props.reset()
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className='row inflow_form'>
          <div className='col-md-12'><h5> New Inflow </h5></div>
          {this.renderFields()}
          <div className='col-md-4'>
            <button className='btn btn-primary btn-sm' type='submit'>
              Add Inflow
            </button>
          </div>
        </div>
      </form>
    )
  }
}

function validate (values) {
  const errors = {}
  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError
    }
  })
  return errors
}

export default reduxForm({
  validate,
  form: 'inflowForm'
})(connect(null, actions)(withRouter(InflowForm)))
