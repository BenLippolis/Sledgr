import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import './Roadmap.css'
import _ from 'lodash'

class Roadmap extends Component {
  countCompletedGoals () {
    var total = 0
    this.props.goals.forEach(function (goal) {
      if (goal.success === true) {
        total += 1
      }
    })
    return total
  }

  // Show the transactions that occurred on a specific day
  showTrans (count) {
    var startDate = moment(this.props.activeGoal.time)
      .add(count * 1, 'days')
      .format('YYYY-MM-DD')
    return this.props.transactions.map(txn => {
      if (txn.date === startDate) {
        return <p key={txn.transaction_id}> {txn.name} {txn.date}</p>
      }
    })
  }

  renderWeeks () {
    // Gives you the number of days that have passed since goal was created
    var daysPassed = 1 + moment().diff(this.props.activeGoal.time, 'days')
    return (
      <div className='container'>
        {_.times(daysPassed, i => (
          <div key={i}>
            <b>
              <p>
                {' '}
                Day
                {' '}
                {i + 1}
                {' '}
                (
                {moment(this.props.activeGoal.time)
                  .add((i + 1) * 1, 'days')
                  .format('YYYY-MM-DD')}
                )
              </p>
            </b>
            {this.showTrans(i + 1)}
          </div>
        ))}
      </div>
    )
  }

  render () {
    return (
      <div className='jumbotron white'>
        <h3> Roadmap </h3>
        <p>
          {' '}
          So far you have reached {this.countCompletedGoals()} goal(s) <br />
          You're on day
          {' '}
          {1 + moment().diff(this.props.activeGoal.time, 'days')}
          {' '}
          of this goal
          <br />
          This goal was created on
          {' '}
          {this.props.activeGoal.time}
        </p>
        <p>
          {' '}
          If you continue setting a new goal evey
          {' '}
          <b>
            {this.props.profile.rewardSchedule}
            {' '}
            weeks
          </b>, you're on track to save
          {' '}
          <b>
            $
            {((this.props.profile.weeklyTargetSavings -
              this.props.profile.weeklyTargetSpend) *
              52).toLocaleString(navigator.language, {
                minimumFractionDigits: 0
              })}
          </b>
          {' '}
          {' '}and spend <b>
            ${(this.props.profile.weeklyTargetSpend *
              52).toLocaleString(navigator.language, {
                minimumFractionDigits: 0
              })}{' '}
          </b>on awesome experiences{' '}over the next 12 months!
          {' '}
        </p>
        {this.renderWeeks()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    goals: state.goals,
    activeGoal: state.activeGoal,
    profile: state.profile,
    transactions: state.transactions
  }
}

export default connect(mapStateToProps)(Roadmap)
