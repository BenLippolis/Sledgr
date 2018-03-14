import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseItem from './ExpenseItem'
import ExpenseForm from './ExpenseForm'

class ExpenseList extends Component {
  render () {
    return this.props.profile.expenses.map(exp => {
      return <ExpenseItem key={exp._id} expense={exp} />
    })
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}
export default connect(mapStateToProps)(ExpenseList)
