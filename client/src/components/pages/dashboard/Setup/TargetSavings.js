import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreasePercentSaved, increasePercentSaved } from '../../../../actions'

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
          {' '}
          How do you want to aim to save every week?
          {this.props.profile.targetSavings}
          {' '}
        </h4>
        <button
          className='btn btn-primary'
          onClick={this.onSaveIncrementClick.bind(this, this.props.profile)}
        >
          +{' '}
        </button>

        <h4> Save {this.props.profile.percentSaved * 100}% </h4>
        <button
          className='btn btn-primary'
          onClick={this.onSaveDecrementClick.bind(this, this.props.profile)}
        >
          -{' '}
        </button>

        <h4>
          To do this, you can still spend           $
          {this.props.profile.weeklyMaxSavings -
            this.props.profile.targetSavings}
          {' '}

          every week on extra stuff...

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
  increasePercentSaved
})(TargetSavings)
