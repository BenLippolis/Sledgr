import React, { Component } from 'react'
import { connect } from 'react-redux'
import IncomeForm from './IncomeForm'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import '../../styles/MaxSavings.css'

class MaxSavings extends Component {
  render () {
    return (
      <div className='jumbotron'>
        <IncomeForm />
        <ExpenseList />
        <ExpenseForm />
        <h4> Weekly Max Savings ${this.props.profile.weeklyMaxSavings} </h4>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps)(MaxSavings)
