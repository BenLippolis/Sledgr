import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as actions from '../../../actions'
import { connect } from 'react-redux'
import AccountVisualization from './AccountVisualization'
import RewardVisual from './RewardVisual'
import PlaidLink from './PlaidLink'

class Dashboard extends Component {
  handleOnSuccess () {
    console.log('It Worked!')
  }
  componentDidMount () {
    this.props.fetchProfile()
  }

  renderCreateProfileLink () {
    if (this.props.profile) {
    } else {
      return (
        <div>
          <Link to={'/profile/create'} className='btn btn-primary'>
            Create Profile
          </Link>
        </div>
      )
    }
  }

  render () {
    return (
      <div>
        <div className='jumbotron text-center branding'>
          <h1> Welcome to your digital dash </h1>
        </div>
        <PlaidLink
          publicKey='dd4a42fe52273d06efafcc208601f9'
          product='transactions'
          env='development'
          clientName='plaidname'
          onSuccess={this.handleOnSuccess}
        />
        {this.renderCreateProfileLink()}
        <AccountVisualization />
        <RewardVisual />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, actions)(Dashboard)
