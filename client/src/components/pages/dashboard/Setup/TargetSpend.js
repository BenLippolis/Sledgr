import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreasePercentSpent, increasePercentSpent } from '../../../../actions'

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
          Awesome, so you’re saving $
          {this.props.profile.weeklyTargetSavings}
          {' '}
          every week. How much of that do you want to spend on a reward?
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
          % of weekly savings
        </h4>
        <button
          className='btn btn-primary'
          onClick={this.onSpentIncrementClick.bind(this, this.props.profile)}
        >
          +{' '}
        </button>
        <h4>
          Great, so every week you'll have $
          {this.props.profile.weeklyTargetSpend}
          {' '}
          to put towards your reward!
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
})(TargetSpend)
