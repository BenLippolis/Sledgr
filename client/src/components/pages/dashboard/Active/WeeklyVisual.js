import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchActiveWeek } from '../../../../actions'
import roundTo from 'round-to'
import moment from 'moment'
import './WeeklyVisual.css'

class WeeklyVisual extends Component {
  componentDidMount () {
    this.props.fetchActiveWeek()
  }

  daysLeftInWeek (week) {
    var today = moment()
    return 7 - today.diff(week.time, 'days')
  }

  calTotalSpend () {
    var total = 0
    this.props.transactions.forEach(function (txn) {
      total += txn.amount
    })
    return total
  }

  render () {
    return (
      <div className='jumbotron wv'>
        <h3> Weekly Visual </h3>
        <p>
          {' '}
          You have
          $
          {roundTo(this.props.activeGoal.maxSpend - this.calTotalSpend(), 0)}
          {' '}
          {' '}
          left to spend on extra stuff over the next
          {' '}
          {7 - (1 + moment().diff(this.props.activeGoal.time, 'days'))}
          {' '}
          days
          {' '}
        </p>
        <div className='progress'>
          <div
            className='progress-bar'
            role='progressbar'
            style={{
              width: (1 -
                this.calTotalSpend() / this.props.activeGoal.maxSpend) *
                100 +
                '%'
            }}
            aria-valuenow='25'
            aria-valuemin='0'
            aria-valuemax='100'
          >
            <b>
              $
              {roundTo(
                this.props.activeGoal.maxSpend - this.calTotalSpend(),
                0
              )}
            </b>
          </div>
        </div>
        <p />
        <p />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    profile: state.profile,
    activeWeek: state.activeWeek,
    transactions: state.transactions,
    activeGoal: state.activeGoal
  }
}

export default connect(mapStateToProps, { fetchActiveWeek })(WeeklyVisual)
