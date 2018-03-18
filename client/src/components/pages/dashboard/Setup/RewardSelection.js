import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateRewardType } from '../../../../actions'
import RewardForm from './Reward/RewardForm'
import roundTo from 'round-to'

class RewardSelection extends Component {
  onUpdateSelectionClick (type) {
    this.props.updateRewardType(type)
  }

  renderOptions () {
    switch (this.props.profile.rewardType) {
      case 'events':
        return (
          <p>
            Sounds like <b> events </b> are your thing,
            let us know specifically what you're into and when you want to do it!
          </p>
        )
      case 'dinner':
        return (
          <p>
            Sounds like <b> dinner </b> is your thing,
            let us know specifically what you're into and when you want to do it!
          </p>
        )
      case 'travel':
        return (
          <p>
            Sounds like <b> travel </b> is your thing,
            let us know specifically what you're into and when you want to do it!
          </p>
        )
      default:
    }
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
          {' '}
          {this.props.profile.rewardFlavor}
          {' '}
          |
          {' '}
          {this.props.profile.rewardDate}
          {' '}
          |
          {' '}
          {this.props.profile.rewardNotes}
          {' '}
        </p>
        {this.renderOptions()}
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
