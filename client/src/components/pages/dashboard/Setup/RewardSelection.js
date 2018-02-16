import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateRewardType } from '../../../../actions'

class RewardSelection extends Component {
  onUpdateClick (type) {
    this.props.updateRewardType(type)
  }

  render () {
    return (
      <div className='jumbotron text-center'>
        <h4>
          {' '}
          What's your idea of fun/ what experiences mean the most to you?
          {' '}
        </h4>
        <div>
          <button
            className='btn btn-primary btn-sm'
            onClick={this.onUpdateClick.bind(this, 'dinner')}
          >
            Dinner
          </button>
          <button
            className='btn btn-primary btn-sm'
            onClick={this.onUpdateClick.bind(this, 'events')}
          >
            Events
          </button>
          <button
            className='btn btn-primary btn-sm'
            onClick={this.onUpdateClick.bind(this, 'travel')}
          >
            Travel
          </button>
        </div>

        <h4>
          {' '}Sounds like {this.props.profile.reward_type} is your thing,
          anything specific you want us to know?{' '}
        </h4>
        <p> Enter Notes Here</p>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, { updateRewardType })(RewardSelection)
