import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseItem from './ExpenseItem'

class ExpenseList extends Component {
  renderExpenses () {
    return this.props.profile.expenses.map(exp => {
      return <ExpenseItem key={exp._id} expense={exp} />
    })
  }

  render () {
    return (
      <div>
        {this.renderExpenses()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}
export default connect(mapStateToProps)(ExpenseList)
