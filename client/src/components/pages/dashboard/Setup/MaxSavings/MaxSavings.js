import React, { Component } from 'react'
import { connect } from 'react-redux'
import IncomeForm from './Income/IncomeForm'
import ExpenseForm from './Expense/ExpenseForm'
import ExpenseList from './Expense/ExpenseList'
import roundTo from 'round-to'
import './MaxSavings.css'

class MaxSavings extends Component {
  render () {
    return (
      <div className='jumbotron'>
        <h4>
          {' '}
          Hey {this.props.profile.name}, you make
          {' '}
          ${this.props.profile.income}
          {' '}
          every
          {' '}
          {this.props.profile.incomeFrequency}
          {' '}
          weeks...
          {' '}
        </h4>
        <IncomeForm />
        <h4> and have the following monthly expenses...</h4>
        <ExpenseList />
        <ExpenseForm />
        <h4>
          {' '}
          so the most you can save each week is $
          {roundTo(this.props.profile.weeklyMaxSavings, 0)}.
          {' '}
        </h4>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps)(MaxSavings)
