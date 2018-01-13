import React, { Component } from 'react'
import { connect } from 'react-redux'

class TargetSavings extends Component {
  render () {
    return (
      <div className='jumbotron text-center'>
        <h3> Target Monthly Savings ${this.props.profile.target_savings} </h3>
        <h3> Monthly Spend ${this.props.profile.monthly_spend}</h3>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, null)(TargetSavings)
