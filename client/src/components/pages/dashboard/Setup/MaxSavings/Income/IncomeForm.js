import React, { Component } from 'react'
import _ from 'lodash'
import { reduxForm, Field } from 'redux-form'
import IncomeField from './IncomeField'
import { withRouter } from 'react-router-dom'
import formFields from './formFields'
import { connect } from 'react-redux'
import * as actions from '../../../../../../actions'

class IncomeForm extends Component {
  renderFields () {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={IncomeField}
          type='text'
          label={label}
          name={name}
        />
      )
    })
  }

  onSubmit (values) {
    this.props.addIncome(values)
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className='row'>
            {this.renderFields()}
            <div className='col-md-4'>
              <button className='btn btn-primary btn-sm' type='submit'>
                Add Income
              </button>
            </div>
          </div>
        </form>
      </div>
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
  form: 'incomeForm'
})(connect(null, actions)(withRouter(IncomeForm)))
