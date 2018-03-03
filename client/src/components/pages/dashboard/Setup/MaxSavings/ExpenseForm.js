import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../../../../actions'

class ExpenseForm extends Component {
  onSubmit (values) {
    this.props.addExpense(values)
    this.props.reset()
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <div className='form-group'>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <label>Add New Expense</label><br />
          <Field
            name='title'
            component='input'
            type='text'
            placeholder='Title'
          />
          <Field
            name='amount'
            component='input'
            type='number'
            placeholder='Amount'
          />
          <button className='btn btn-primary float-right' type='submit'>
            Add Expense
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default reduxForm({
  form: 'profileExpenseForm'
})(connect(mapStateToProps, actions)(withRouter(ExpenseForm)))
