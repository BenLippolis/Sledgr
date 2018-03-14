import React, { Component } from 'react'
import _ from 'lodash'
import { reduxForm, Field, FieldArray } from 'redux-form'
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

  componentDidMount () {
    this.handleInitialize()
  }

  handleInitialize () {
    const initData = {
      title: this.props.expense.title,
      amount: this.props.expense.amount
    }
    this.props.initialize(initData)
  }

  toggleEdit () {
    this.setState({ isEditing: !this.state.isEditing })
  }

  onDeleteClick (expense) {
    this.props.deleteExpense(expense)
  }

  renderFields () {
    return _.map(formFields, ({ label, name }, index) => {
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
              <button className='btn btn-sm btn-outline-primary' type='submit'>
                Update Expense
              </button>
            </div>
          </div>
        </form>
      )
    } else {
      return (
        <div className='row'>
          {this.renderFields()}
          <div className='col-md-4'>
            <button
              className='btn btn-outline-primary btn-sm'
              onClick={this.toggleEdit}
            >
              edit
            </button>
            <button
              className='btn btn-outline-danger btn-sm'
              onClick={this.onDeleteClick.bind(this, this.props.expense)}
            >
              {' '}
              Delete{' '}
            </button>
          </div>
        </div>
      )
    }
  }

  onSubmit (values) {
    this.props.updateExpense(values, this.props.expense._id)
    this.toggleEdit()
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
  validate
})(connect(null, actions)(withRouter(ExpenseUpdateForm)))
