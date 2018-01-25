import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreasePercentSaved, increasePercentSaved } from '../../../actions'

class TargetSavings extends Component {
  onDecrementClick (value) {
    this.props.decreasePercentSaved(value)
  }

  onIncrementClick (value) {
    this.props.increasePercentSaved(value)
  }
  render () {
    return (
      <div className='jumbotron text-center'>
        <button
          className='btn btn-primary'
          onClick={this.onDecrementClick.bind(
            this,
            this.props.profile.percent_saved - 0.01
          )}
        >
          -{' '}
        </button>
        <button
          className='btn btn-primary'
          onClick={this.onIncrementClick.bind(
            this,
            this.props.profile.percent_saved + 0.01
          )}
        >
          +{' '}
        </button>
        <h3> Percent Saved {this.props.profile.percent_saved * 100}% </h3>
        <h3> Target Monthly Savings ${this.props.profile.target_savings} </h3>
        <h3> Monthly Spend ${this.props.profile.monthly_spend}</h3>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, {
  decreasePercentSaved,
  increasePercentSaved
})(TargetSavings)
