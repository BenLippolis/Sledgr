import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Roadmap.css'

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

  render () {
    return (
      <div className='jumbotron white'>
        <h3> Roadmap </h3>
        <p> So far you have reached {this.countCompletedGoals()} goal(s) </p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    goals: state.goals
  }
}

export default connect(mapStateToProps)(Roadmap)
