import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitGoal } from '../../../actions'

class Begin extends Component {
  onBeginClick () {
    this.props.submitGoal()
  }

  render () {
    return (
      <div className='text-center'>
        <button
          className='btn btn-primary'
          onClick={this.onBeginClick.bind(this)}
        >
          {' '}Begin!{' '}
        </button>
      </div>
    )
  }
}

export default connect(null, { submitGoal })(Begin)
