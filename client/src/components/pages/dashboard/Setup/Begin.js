import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitGoal } from '../../../../actions'
import roundTo from 'round-to'

class Begin extends Component {
  calTotalExpenses () {
    var total = 0
    this.props.profile.expenses.forEach(function (exp) {
      total += exp.amount
    })
    return total * 12 / 52
  }
  onBeginClick (profile, weeklySpend) {
    this.props.submitGoal(profile, weeklySpend)
  }

  render () {
    var maxSavings =
      this.props.profile.income / this.props.profile.incomeFrequency -
      this.calTotalExpenses()
    var weeklySpend = roundTo(
      maxSavings * (1 - this.props.profile.percentSaved),
      0
    )
    return (
      <div className='text-center white jumbotron'>
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
            {weeklySpend}
          </b>
          {' '}
          on extras per week. Doing so, you will save <b>
            $
            {roundTo(maxSavings * this.props.profile.percentSaved, 0)}
          </b>
          {' '}
          each week and have <b>
            $
            {roundTo(
              maxSavings *
                this.props.profile.percentSaved *
                this.props.profile.percentSpent *
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
          onClick={this.onBeginClick.bind(
            this,
            this.props.profile,
            weeklySpend
          )}
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
