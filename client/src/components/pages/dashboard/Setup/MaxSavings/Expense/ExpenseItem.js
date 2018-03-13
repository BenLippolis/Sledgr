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
      <li className='list-group-item'>
        <div className='video-list media'>
          <p> {this.props.expense.title} ${this.props.expense.amount}</p>
          <ExpenseUpdateForm
            expense={this.props.expense}
            form={`ExpenseUpdateForm_${this.props.expense._id}`}
          />
          <button
            className='btn btn-outline-danger btn-sm'
            onClick={this.onDeleteClick.bind(this, this.props.expense)}
          >
            {' '}
            Delete{' '}
          </button>
        </div>
      </li>
    )
  }
}

export default connect(null, actions)(ExpenseItem)
