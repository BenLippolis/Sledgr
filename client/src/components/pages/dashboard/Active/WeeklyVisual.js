import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeeklyVisual extends Component {
  render () {
    return (
      <div className='jumbotron'>
        <h3> Weekly visual </h3>
        <p>
          {' '}
          {(this.props.profile.max_savings -
            this.props.profile.target_savings) /
            4}
        </p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps)(WeeklyVisual)
