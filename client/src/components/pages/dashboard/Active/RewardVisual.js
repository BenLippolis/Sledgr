import React, { Component } from 'react'
import { connect } from 'react-redux'
import './RewardVisual.css'

class RewardVisual extends Component {
  render () {
    return (
      <div className='jumbotron rv text-center'>
        <h3> Reward Visual </h3>
        <p>
          {' '}
          You're going to
          {' '}
          {this.props.profile.rewardType}
          {' '}
          in
          {' '}
          {this.props.activeGoal.weekCount}
          {' '}
          weeks. Get excited!
          {' '}
        </p>
        <button className='btn btn-outline-primary btn-sm'>
          View Reward Details
        </button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    profile: state.profile,
    activeGoal: state.activeGoal
  }
}

export default connect(mapStateToProps)(RewardVisual)
