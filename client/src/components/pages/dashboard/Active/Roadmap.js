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

  showTrans (count) {
    return this.props.transactions.map(txn => {
      var a = moment(txn.date)
      var b = moment(this.props.activeGoal.time)
        .add(count, 'days')
        .format('YYYY-MM-DD')
      if (a.diff(b, 'days') === count) {
        return (
          <p>
            {' '}
            {txn.name}<br />
            {' '}
            Txn Created {txn.date}<br />
            {' '}
            Goal Created
            {' '}
            {moment(this.props.activeGoal.time).format('YYYY-MM-DD')}<br />
            Days between goal & transaction creation <b>{a.diff(b, 'days')}</b>

          </p>
        )
      }
    })
  }

  renderWeeks () {
    var today = moment()
    return (
      <div className='container'>
        {_.times(today.diff(this.props.activeGoal.time, 'days'), i => (
          <div>
            <p key={i}> Day {i + 1}</p>
            {this.showTrans(i)}
          </div>
        ))}
      </div>
    )
  }

  render () {
    return (
      <div className='jumbotron white'>
        <h3> Roadmap </h3>
        <p> So far you have reached {this.countCompletedGoals()} goal(s) </p>
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
