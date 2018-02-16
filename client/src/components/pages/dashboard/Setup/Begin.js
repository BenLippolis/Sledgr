import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitGoal } from '../../../../actions'

class Begin extends Component {
  onBeginClick () {
    this.props.submitGoal()
  }

  render () {
    return (
      <div className='text-center jumbotron'>
        <h4>
          {' '}
          Soooo if you limit your weekly spending on extra stuff to
          {' '}
          $
          {(this.props.profile.max_savings -
            this.props.profile.target_savings) /
            4}
          ...<br />
          {' '}

          {' '}
          you'll reach your goal in no time!!
        </h4>
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

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, { submitGoal })(Begin)
