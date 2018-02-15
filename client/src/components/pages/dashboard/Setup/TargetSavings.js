import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  decreasePercentSaved,
  increasePercentSaved,
  decreasePercentSpent,
  increasePercentSpent
} from '../../../../actions'

class TargetSavings extends Component {
  onSaveDecrementClick (profile) {
    this.props.decreasePercentSaved(profile)
  }

  onSaveIncrementClick (profile) {
    this.props.increasePercentSaved(profile)
  }

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
          How much will you save every month? $
          {this.props.profile.target_savings}
          {' '}
        </h4>
        <button
          className='btn btn-primary'
          onClick={this.onSaveIncrementClick.bind(this, this.props.profile)}
        >
          +{' '}
        </button>

        <h4> Save {this.props.profile.percent_saved * 100}% </h4>
        <button
          className='btn btn-primary'
          onClick={this.onSaveDecrementClick.bind(this, this.props.profile)}
        >
          -{' '}
        </button>

        <h4>
          {' '}
          This is how much you can spend every week
          {' '}
          $
          {(this.props.profile.max_savings -
            this.props.profile.target_savings) /
            4}
        </h4>

        <h4>
          {' '}
          Of the $
          {this.props.profile.target_savings}
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
          {this.props.profile.percent_spent * 100}
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
          {this.props.profile.monthly_spend}
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
  decreasePercentSaved,
  increasePercentSaved,
  decreasePercentSpent,
  increasePercentSpent
})(TargetSavings)
