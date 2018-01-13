import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateRewardSchedule } from '../../../actions'

class SavingsSchedule extends Component {
  onUpdateClick (value) {
    this.props.updateRewardSchedule(value)
  }

  renderScheduleOptions () {
    switch (this.props.profile.reward_schedule === 0) {
      case false:
        return (
          <p>
            {' '}
            You're scheduled to get rewarded every
            {' '}
            {this.props.profile.reward_schedule}
            {' '}
            month(s)
            {' '}
          </p>
        )
      case true:
        return (
          <div>
            <p> Please make a selection </p>
            <button
              className='btn btn-success btn-sm'
              onClick={this.onUpdateClick.bind(this, 1)}
            >
              {' '}
              1 Month
            </button>
            <button
              className='btn btn-success btn-sm'
              onClick={this.onUpdateClick.bind(this, 2)}
            >
              {' '}
              2 Months
            </button>
            <button
              className='btn btn-success btn-sm'
              onClick={this.onUpdateClick.bind(this, 3)}
            >
              {' '}
              3 Months{' '}
            </button>
          </div>
        )
      case null:

      default:
    }
  }

  render () {
    return (
      <div className='jumbotron text-center'>
        <h3> Reward Schedule </h3>
        {this.renderScheduleOptions()}
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
