import React, { Component } from 'react'
import { connect } from 'react-redux'
import RewardForm from '../../../reward/RewardForm'

class RewardSelection extends Component {
  render () {
    return (
      <div className='jumbotron text-center'>
        <h4>
          {' '}
          What's your idea of fun/ what experiences mean the most to you?
          {' '}
        </h4>
        <div>
          <button className='btn btn-primary btn-sm'>
            Dinner
          </button>
          <button className='btn btn-primary btn-sm'>
            Events
          </button>
          <button className='btn btn-primary btn-sm'>
            Travel
          </button>
        </div>
        <div className='row'>
          <div className='col-md-4 col-md-offset-4'>
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

export default connect(mapStateToProps)(RewardSelection)
