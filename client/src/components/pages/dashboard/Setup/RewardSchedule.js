import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateRewardSchedule } from '../../../../actions'

class RewardSchedule extends Component {
  onUpdateClick (frequency, profile) {
    this.props.updateRewardSchedule(frequency, profile)
  }

  render () {
    return (
      <div className='jumbotron text-center'>
        <h4>
          {' '}How often would you like to do something new & fun?
        </h4>

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
        <div>
          <h4>
            You'll have $
            {this.props.profile.reward_budget}
            {' '}
            to spend on something new & fun...
            <br />
            {' '}
            when you hit your goal in
            {' '}
            {' '}
            {this.props.profile.reward_schedule}
            {' '}
            month(s)

          </h4>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, { updateRewardSchedule })(
  RewardSchedule
)
