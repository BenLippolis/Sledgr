import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreasePercentSpent, increasePercentSpent } from '../../../../actions'
import roundTo from 'round-to'

class TargetSpend extends Component {
  calTotalExpenses () {
    var total = 0
    this.props.profile.expenses.forEach(function (exp) {
      total += exp.amount
    })
    return total * 12 / 52
  }

  onSpentDecrementClick (profile) {
    this.props.decreasePercentSpent(profile)
  }

  onSpentIncrementClick (profile) {
    this.props.increasePercentSpent(profile)
  }

  render () {
    var maxSavings =
      this.props.profile.income / this.props.profile.incomeFrequency -
      this.calTotalExpenses()
    return (
      <div className='jumbotron white text-center'>
        <h4>
          Of the $
          {roundTo(maxSavings * this.props.profile.percentSaved, 0)}
          {' '}
          you save how much do you want to put towards your reward?
        </h4>
        <div className='row'>
          <div className='col-md-4' />
          <div className='col-md-1'>
            <button
              className='btn btn-primary'
              onClick={this.onSpentDecrementClick.bind(
                this,
                this.props.profile
              )}
            >
              -{' '}
            </button>
          </div>
          <div className='col-md-2'>

            <h4>
              {roundTo(this.props.profile.percentSpent * 100, 0)}%
            </h4>
          </div>
          <div className='col-md-1'>
            <button
              className='btn btn-primary'
              onClick={this.onSpentIncrementClick.bind(
                this,
                this.props.profile
              )}
            >
              +{' '}
            </button>
          </div>
        </div>
        <p>
          Great, so every week you'll have $
          <b>
            {roundTo(
              maxSavings *
                this.props.profile.percentSaved *
                this.props.profile.percentSpent,
              0
            )}
          </b>
          {' '}
          to put towards a reward of your choice!
        </p>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, {
  decreasePercentSpent,
  increasePercentSpent
})(TargetSpend)
