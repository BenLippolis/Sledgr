import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateRewardSchedule } from '../../../../actions'
import RewardForm from './Reward/RewardForm'
import roundTo from 'round-to'

class RewardSchedule extends Component {
  calTotalExpenses () {
    var total = 0
    this.props.profile.expenses.forEach(function (exp) {
      total += exp.amount
    })
    return total * 12 / 52
  }

  onUpdateScheduleClick (frequency, profile) {
    this.props.updateRewardSchedule(frequency, profile)
  }

  render () {
    var maxSavings =
      this.props.profile.income / this.props.profile.incomeFrequency -
      this.calTotalExpenses()
    return (
      <div className='jumbotron white text-center'>

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
            <b>
              {roundTo(
                maxSavings *
                  this.props.profile.percentSaved *
                  this.props.profile.percentSpent *
                  this.props.profile.rewardSchedule,
                0
              )}
            </b>
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
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, {
  updateRewardSchedule
})(RewardSchedule)
