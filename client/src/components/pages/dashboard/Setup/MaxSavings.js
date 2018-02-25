import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateMaxSavings, fetchBalance } from '../../../../actions'
import '../styles/MaxSavings.css'
import IncomeForm from './IncomeForm'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

class MaxSavings extends Component {
  componentDidMount () {
    this.props.fetchBalance()
  }

  renderProfileMaxSavings () {
    if (this.props.profile) {
      return this.props.profile.maxSavings
    }
  }

  onUpdateClick (value) {
    this.props.updateMaxSavings(value)
  }

  renderDoneButton () {
    switch (this.props.profile.showMaxSavings) {
      case null:
        return
      case false:
        return (
          <button
            className='btn btn-primary btn-sm'
            onClick={this.onUpdateClick.bind(this, true)}
          >
            {' '}
            Edit Max Savings{' '}
          </button>
        )
      case true:
        return (
          <button
            className='btn btn-danger btn-sm'
            onClick={this.onUpdateClick.bind(this, false)}
          >
            {' '}
            Done Editing{' '}
          </button>
        )
      default:
    }
  }

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

export default connect(mapStateToProps, { updateMaxSavings, fetchBalance })(
  MaxSavings
)
