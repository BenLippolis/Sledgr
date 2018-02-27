import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreasePercentSpent, increasePercentSpent } from '../../../../actions'
import roundTo from 'round-to'

class TargetSpend extends Component {
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
          Of the $
          {roundTo(this.props.profile.weeklyTargetSavings, 0)}
          {' '}
          you save how much do you want to spend on a reward?
        </h4>
        <button
          className='btn btn-primary'
          onClick={this.onSpentDecrementClick.bind(this, this.props.profile)}
        >
          -{' '}
        </button>

        <h4>
          {roundTo(this.props.profile.percentSpent * 100, 0)}%
        </h4>
        <button
          className='btn btn-primary'
          onClick={this.onSpentIncrementClick.bind(this, this.props.profile)}
        >
          +{' '}
        </button>
        <p>
          Great, so every week you'll have $
          <b>{roundTo(this.props.profile.weeklyTargetSpend, 0)}</b>
          {' '}
          to put towards your reward!
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
