import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitGoal } from '../../../../actions'
import roundTo from 'round-to'

class Begin extends Component {
  onBeginClick (profile) {
    this.props.submitGoal(profile)
  }

  render () {
    return (
      <div className='text-center jumbotron'>
        <p>
          {' '}
          You’re done! So for the next
          {' '}
          <b>
            {this.props.profile.rewardSchedule}
            {' '}
            weeks
          </b>, you can spend <b>
            $
            {roundTo(
              this.props.profile.weeklyMaxSavings -
                this.props.profile.weeklyTargetSavings,
              0
            )}
          </b>
          {' '}
          on extras per week and still save <b>
            $
            {roundTo(this.props.profile.weeklyTargetSavings, 0)}
          </b>
          {' '}
          each week and have <b>
            $
            {roundTo(
              this.props.profile.weeklyTargetSpend *
                this.props.profile.rewardSchedule,
              0
            )}
          </b>
          {' '}
          to spend on a reward when you accomplish the goal.
          {' '}
        </p>
        <button
          className='btn btn-primary'
          onClick={this.onBeginClick.bind(this, this.props.profile)}
        >
          {' '}Begin!{' '}
        </button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, { submitGoal })(Begin)
