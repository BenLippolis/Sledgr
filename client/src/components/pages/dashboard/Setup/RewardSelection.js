import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateRewardType, updateRewardSchedule } from '../../../../actions'
import RewardForm from './Reward/RewardForm'
import roundTo from 'round-to'
// import FaPlane from 'react-icons/lib/fa/plane'
class RewardSelection extends Component {
  onUpdateScheduleClick (frequency, profile) {
    this.props.updateRewardSchedule(frequency, profile)
  }

  onUpdateSelectionClick (type) {
    this.props.updateRewardType(type)
  }

  render () {
    return (
      <div className='jumbotron text-center'>

        <div>
          <h4>
            {' '}How often do you want to cash in on your reward?
          </h4>
          <button
            className='btn btn-success btn-sm'
            onClick={this.onUpdateScheduleClick.bind(
              this,
              2,
              this.props.profile
            )}
          >
            {' '}
            2 Weeks
          </button>
          <button
            className='btn btn-success btn-sm'
            onClick={this.onUpdateScheduleClick.bind(
              this,
              4,
              this.props.profile
            )}
          >
            {' '}
            1 Month
          </button>
          <button
            className='btn btn-success btn-sm'
            onClick={this.onUpdateScheduleClick.bind(
              this,
              8,
              this.props.profile
            )}
          >
            {' '}
            2 Months
          </button>
          <button
            className='btn btn-success btn-sm'
            onClick={this.onUpdateScheduleClick.bind(
              this,
              12,
              this.props.profile
            )}
          >
            {' '}
            3 Months{' '}
          </button>
        </div>
        <div>
          <p>
            You'll have $
            <b>{roundTo(this.props.profile.rewardBudget, 0)}</b>
            {' '}
            to spend on a reward
            {' '}
            when you hit your goal in {' '}
            <b>
              {this.props.profile.rewardSchedule}
              {' '}
              weeks
            </b>.
          </p>
        </div>
        <h4>
          Choose your reward
        </h4>
        <p>
          Let us know what experiences mean the most to you and we'll make it happen
        </p>
        <div>
          <button
            className='btn btn-primary btn-sm'
            onClick={this.onUpdateSelectionClick.bind(this, 'dinner')}
          >
            Dinner
          </button>
          <button
            className='btn btn-primary btn-sm'
            onClick={this.onUpdateSelectionClick.bind(this, 'events')}
          >
            Events
          </button>
          <button
            className='btn btn-primary btn-sm'
            onClick={this.onUpdateSelectionClick.bind(this, 'travel')}
          >
            Travel
          </button>
        </div>

        <p>
          Sounds like <b>{this.props.profile.rewardType}</b> is your thing,
          anything specific you want us to know?{' '}
        </p>
        <div className='row'>
          <div className='col-md-3' />
          <div className='col-md-6 text-center'>
            <RewardForm />
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, {
  updateRewardType,
  updateRewardSchedule
})(RewardSelection)
