import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreasePercentSaved, increasePercentSaved } from '../../../../actions'
import roundTo from 'round-to'

class TargetSavings extends Component {
  onSaveDecrementClick (profile) {
    this.props.decreasePercentSaved(profile)
  }

  onSaveIncrementClick (profile) {
    this.props.increasePercentSaved(profile)
  }

  render () {
    return (
      <div className='jumbotron text-center'>
        <h4>
          How much do you want to aim to save every week?
        </h4>
        <p>
          {' '}
          If you save
          {' '}
          <b>{roundTo(this.props.profile.percentSaved * 100, 0)}</b>
          % of the money you can possible save you'll be saving
          {' '}
          <b>${roundTo(this.props.profile.weeklyTargetSavings, 0)}</b>
          {' '}
          every week.
          {' '}
        </p>
        <button
          className='btn btn-primary'
          onClick={this.onSaveIncrementClick.bind(this, this.props.profile)}
        >
          +{' '}
        </button>

        <h4> {roundTo(this.props.profile.percentSaved * 100, 0)}% </h4>
        <button
          className='btn btn-primary'
          onClick={this.onSaveDecrementClick.bind(this, this.props.profile)}
        >
          -{' '}
        </button>

        <p>
          You can save that much and still have          $
          <b>
            {roundTo(
              this.props.profile.weeklyMaxSavings -
                this.props.profile.weeklyTargetSavings,
              0
            )}
          </b>
          {' '}
          to spend on extra stuff every week :)
        </p>

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
