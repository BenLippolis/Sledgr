import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeeklyVisual extends Component {
  render () {
    return (
      <div>
        <h3> Weekly visual </h3>
        <div className='progress'>
          <div
            className='progress-bar'
            role='progressbar'
            style={{ width: (1 - 1 / 5) * 100 + '%' }}
            aria-valuenow='25'
            aria-valuemin='0'
            aria-valuemax='100'
          >
            25{' '}
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
    goals: state.goals
  }
}

export default connect(mapStateToProps)(WeeklyVisual)
