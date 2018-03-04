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

  renderWeeks () {
    var today = moment()
    return (
      <div className='container'>
        {_.times(today.diff(this.props.activeGoal.time, 'hours'), i => (
          <p key={i}> Week {i + 1}</p>
        ))}
      </div>
    )
  }

  render () {
    return (
      <div className='jumbotron white'>
        <h3> Roadmap </h3>
        <p> So far you have reached {this.countCompletedGoals()} goal(s) </p>
        {this.renderWeeks()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    goals: state.goals,
    activeGoal: state.activeGoal
  }
}

export default connect(mapStateToProps)(Roadmap)
