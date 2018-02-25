import React, { Component } from 'react'
import { connect } from 'react-redux'

class ExpenseList extends Component {
  renderExpenses () {
    return this.props.profile.expenses.map(exp => {
      return (
        <div className='card' key={exp._id}>
          <div className='card-body'>
            <p className='card-text'>
              {exp.title} | ${exp.amount}
            </p>
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className='all'>
        <h5> Expenses </h5>
        {this.renderExpenses()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}
export default connect(mapStateToProps)(ExpenseList)
