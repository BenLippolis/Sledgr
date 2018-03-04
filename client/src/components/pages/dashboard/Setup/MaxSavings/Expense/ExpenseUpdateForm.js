import React, { Component } from 'react'
import _ from 'lodash'
import { reduxForm, Field } from 'redux-form'
import ExpenseField from './ExpenseField'
import { withRouter } from 'react-router-dom'
import formFields from './formFields'
import { connect } from 'react-redux'
import * as actions from '../../../../../../actions'

class ExpenseUpdateForm extends Component {
  renderFields () {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={ExpenseField}
          type='text'
          label={label}
          name={name}
        />
      )
    })
  }

  onSubmit (values) {
    this.props.addExpense(values)
    this.props.reset()
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <div className='jumbotron'>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className='row'>
            {this.renderFields()}
            <div className='col-md-4'>
              <button className='btn btn-primary btn-sm' type='submit'>
                Add Expense
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
  form: 'expenseUpdateForm',
  initialValues: {
    title: 'some value here',
    amount: 'hey'
  }
})(connect(null, actions)(withRouter(ExpenseUpdateForm)))
