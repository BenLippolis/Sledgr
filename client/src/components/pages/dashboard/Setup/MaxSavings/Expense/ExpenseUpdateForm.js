import React, { Component } from 'react'
import _ from 'lodash'
import { reduxForm, Field } from 'redux-form'
import ExpenseField from './ExpenseField'
import { withRouter } from 'react-router-dom'
import formFields from './formFields'
import { connect } from 'react-redux'
import * as actions from '../../../../../../actions'

class ExpenseUpdateForm extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = { isEditing: false }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit () {
    this.setState({ isEditing: !this.state.isEditing })
  }

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

  renderForm () {
    const { handleSubmit } = this.props

    if (this.state.isEditing) {
      return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className='row'>
            {this.renderFields()}
            <div className='col-md-4'>
              <button className='btn btn-outline-primary btn-sm' type='submit'>
                Update Expense
              </button>
            </div>
          </div>
        </form>
      )
    } else {
      return (
        <button
          className='btn btn-outline-primary btn-sm'
          onClick={this.toggleEdit}
        >
          edit
        </button>
      )
    }
  }

  onSubmit (values) {
    this.props.updateExpense(values, this.props.expense_id)
    this.toggleEdit()
    this.props.reset()
  }

  render () {
    return (
      <div>
        {this.renderForm()}
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
  form: 'expenseUpdateForm'
})(connect(null, actions)(withRouter(ExpenseUpdateForm)))
