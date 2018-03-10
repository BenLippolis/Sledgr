import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseItem from './ExpenseItem'
import ExpenseForm from './ExpenseForm'

class ExpenseList extends Component {
  renderExpenses () {
    return this.props.profile.expenses.map(exp => {
      return <ExpenseItem key={exp._id} expense={exp} />
    })
  }

  render () {
    return (
      <div className='card'>

        <ul className='list-group list-group-flush'>
          {this.renderExpenses()}
        </ul>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}
export default connect(mapStateToProps)(ExpenseList)
