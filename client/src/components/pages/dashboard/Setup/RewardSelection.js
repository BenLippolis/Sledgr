import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateRewardType } from '../../../../actions'
import RewardForm from './Reward/RewardForm'
import roundTo from 'round-to'

class RewardSelection extends Component {
  onUpdateSelectionClick (type) {
    this.props.updateRewardType(type)
  }

  render () {
    return (
      <div className='jumbotron white text-center'>
        <h4>
          What would you like to do for your reward?
        </h4>
        <p>
          Let us know what experiences mean the most to you and we'll make it happen
        </p>
        <div>
          <button
            className='btn btn-primary btn-sm'
            onClick={this.onUpdateSelectionClick.bind(this, 'dinner')}
          >
            Dinner
          </button>
          <button
            className='btn btn-primary btn-sm'
            onClick={this.onUpdateSelectionClick.bind(this, 'events')}
          >
            Events
          </button>
          <button
            className='btn btn-primary btn-sm'
            onClick={this.onUpdateSelectionClick.bind(this, 'travel')}
          >
            Travel
          </button>
        </div>

        <p>
          Sounds like <b>{this.props.profile.rewardType}</b> is your thing,
          anything specific you want us to know?{' '}
        </p>
        <div className='row'>
          <div className='col-md-3' />
          <div className='col-md-6 text-center'>
            <RewardForm />
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, {
  updateRewardType
})(RewardSelection)
