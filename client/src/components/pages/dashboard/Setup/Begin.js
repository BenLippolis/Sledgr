import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitGoal } from '../../../../actions'

class Begin extends Component {
  onBeginClick (profile) {
    this.props.submitGoal(profile)
  }

  render () {
    return (
      <div className='text-center jumbotron'>
        <button
          className='btn btn-primary'
          onClick={this.onBeginClick.bind(this, this.props.profile)}
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
