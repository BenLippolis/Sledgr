import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../../../actions'
import ExpenseUpdateForm from './ExpenseUpdateForm'
import ExpenseItem from './ExpenseItem'

class ExpenseList extends Component {
  onDeleteClick (expense) {
    this.props.deleteExpense(expense)
  }

  renderExpenses () {
    return this.props.profile.expenses.map(exp => {
      return <ExpenseItem key={exp._id} expense={exp} />
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
