import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  decreasePercentSaved,
  increasePercentSaved,
  decreasePercentSpent,
  increasePercentSpent
} from '../../../actions'

class TargetSavings extends Component {
  onSaveDecrementClick (value) {
    this.props.decreasePercentSaved(value)
  }

  onSaveIncrementClick (value) {
    this.props.increasePercentSaved(value)
  }

  onSpentDecrementClick (value) {
    this.props.decreasePercentSpent(value)
  }

  onSpentIncrementClick (value) {
    this.props.increasePercentSpent(value)
  }

  render () {
    return (
      <div className='jumbotron text-center'>
        <button
          className='btn btn-primary'
          onClick={this.onSaveDecrementClick.bind(
            this,
            this.props.profile.percent_saved - 0.01
          )}
        >
          -{' '}
        </button>
        <button
          className='btn btn-primary'
          onClick={this.onSaveIncrementClick.bind(
            this,
            this.props.profile.percent_saved + 0.01
          )}
        >
          +{' '}
        </button>
        <h3> Percent Saved {this.props.profile.percent_saved * 100}% </h3>
        <h3> Target Monthly Savings ${this.props.profile.target_savings} </h3>
        <h3> Percent Spent {this.props.profile.percent_spent * 100}% </h3>
        <h3> Monthly Spend ${this.props.profile.monthly_spend}</h3>
        <button
          className='btn btn-primary'
          onClick={this.onSpentDecrementClick.bind(
            this,
            this.props.profile.percent_spent - 0.01
          )}
        >
          -{' '}
        </button>
        <button
          className='btn btn-primary'
          onClick={this.onSpentIncrementClick.bind(
            this,
            this.props.profile.percent_spent + 0.01
          )}
        >
          +{' '}
        </button>
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
