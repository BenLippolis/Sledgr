import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../../../actions'
import ExpenseUpdateForm from './ExpenseUpdateForm'

class ExpenseItem extends Component {
  onDeleteClick (expense) {
    this.props.deleteExpense(expense)
  }

  render () {
    return (
      <div className='row'>
        <div className='card-text'>
          <ExpenseUpdateForm
            expense={this.props.expense}
            form={`ExpenseUpdateForm_${this.props.expense._id}`}
          />
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(ExpenseItem)
