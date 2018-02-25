import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreasePercentSpent, increasePercentSpent } from '../../../../actions'

class RewardSchedule extends Component {
  onSpentDecrementClick (profile) {
    this.props.decreasePercentSpent(profile)
  }

  onSpentIncrementClick (profile) {
    this.props.increasePercentSpent(profile)
  }

  render () {
    return (
      <div className='jumbotron text-center'>
        <h4>
          {' '}
          Of the $
          {this.props.profile.targetSavings}
          {' '}
          you save every month, how much would you like to spend?
          {' '}
        </h4>
        <button
          className='btn btn-primary'
          onClick={this.onSpentDecrementClick.bind(this, this.props.profile)}
        >
          -{' '}
        </button>

        <h4>
          {' '}
          Spend
          {' '}
          {this.props.profile.percentSpent * 100}
          % of monthly savings
        </h4>
        <button
          className='btn btn-primary'
          onClick={this.onSpentIncrementClick.bind(this, this.props.profile)}
        >
          +{' '}
        </button>
        <h4>
          {' '}
          You'll have $
          {this.props.profile.monthlySpend}
          {' '}
          to spend on something new & fun every month!
        </h4>

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
})(RewardSchedule)
