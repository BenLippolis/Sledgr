import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateRewardSchedule } from '../../../../actions'
import RewardForm from '../../../reward/RewardForm'

class SavingsSchedule extends Component {
  onUpdateClick (frequency, profile) {
    this.props.updateRewardSchedule(frequency, profile)
  }

  renderScheduleOptions () {
    if (this.props.profile.reward_schedule === 0) {
      return <p> Please make a selection </p>
    } else {
      return (
        <p>
          {' '}
          Every
          {' '}
          {this.props.profile.reward_schedule}
          {' '}
          month(s)
          {' '}
        </p>
      )
    }
  }

  render () {
    return (
      <div className='jumbotron text-center'>
        <h4> How often would you like to do something new & fun? </h4>
        {this.renderScheduleOptions()}
        <div>
          <button
            className='btn btn-success btn-sm'
            onClick={this.onUpdateClick.bind(this, 0.5, this.props.profile)}
          >
            {' '}
            2 Weeks
          </button>
          <button
            className='btn btn-success btn-sm'
            onClick={this.onUpdateClick.bind(this, 1, this.props.profile)}
          >
            {' '}
            1 Month
          </button>
          <button
            className='btn btn-success btn-sm'
            onClick={this.onUpdateClick.bind(this, 2, this.props.profile)}
          >
            {' '}
            2 Months
          </button>
          <button
            className='btn btn-success btn-sm'
            onClick={this.onUpdateClick.bind(this, 3, this.props.profile)}
          >
            {' '}
            3 Months{' '}
          </button>
        </div>
        <div> Reward budget: ${this.props.profile.reward_budget}</div>
        <div>
          <button className='btn btn-primary btn-sm'>
            Dinner
          </button>
          <button className='btn btn-primary btn-sm'>
            Events
          </button>
          <button className='btn btn-primary btn-sm'>
            Travel
          </button>
        </div>
        <div className='col-md-4 col-md-offset-4'>
          <RewardForm />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, { updateRewardSchedule })(
  SavingsSchedule
)
