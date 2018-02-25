import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateRewardType, updateRewardSchedule } from '../../../../actions'
import NotesForm from './NotesForm'

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
            {' '}How often would you like to do something new & fun?
          </h4>
          <button
            className='btn btn-success btn-sm'
            onClick={this.onUpdateScheduleClick.bind(
              this,
              0.5,
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
              1,
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
              2,
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
              3,
              this.props.profile
            )}
          >
            {' '}
            3 Months{' '}
          </button>
        </div>
        <div>
          <h4>
            You'll have $
            {this.props.profile.rewardBudget}
            {' '}
            to spend on something new & fun...
            <br />
            {' '}
            when you hit your goal in
            {' '}
            {' '}
            {this.props.profile.rewardSchedule}
            {' '}
            month(s)

          </h4>
        </div>
        <h4>
          {' '}
          What's your idea of fun/ what experiences mean the most to you?
          {' '}
        </h4>
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

        <h4>
          {' '}Sounds like {this.props.profile.rewardType} is your thing,
          anything specific you want us to know?{' '}
        </h4>
        <NotesForm />
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
