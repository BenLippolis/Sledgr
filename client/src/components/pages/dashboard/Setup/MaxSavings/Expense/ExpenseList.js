import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../../../actions'
import ExpenseUpdateForm from './ExpenseUpdateForm'

class ExpenseList extends Component {
  onDeleteClick (expense) {
    this.props.deleteExpense(expense)
  }
  renderExpenses () {
    return this.props.profile.expenses.map(exp => {
      return (
        <div className='card' key={exp._id}>
          <div className='card-body'>
            <p className='card-text'>
              {exp.title} | ${exp.amount}
              <button className='btn btn-warning btn-sm'>
                {' '}
                Edit{' '}
              </button>
              <button
                className='btn btn-danger btn-sm'
                onClick={this.onDeleteClick.bind(this, exp)}
              >
                {' '}
                Delete{' '}
              </button>
            </p>
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className='all'>
        {this.renderExpenses()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}
export default connect(mapStateToProps, actions)(ExpenseList)
