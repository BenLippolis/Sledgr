import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as actions from '../../../actions'
import { connect } from 'react-redux'
import AccountVisualization from './AccountVisualization'
import RewardVisual from './RewardVisual'
import PlaidLink from './PlaidLink'
import Transactions from './Transactions'
import axios from 'axios'

class Dashboard extends Component {
  handleOnSuccess (token, metadata) {
    axios.post('/api/get_access_token', {
      public_token: token,
      accounts: metadata.accounts,
      institution: metadata.institution,
      link_session_id: metadata.link_session_id
    })
  }

  plaidProducts () {
    return ['transactions']
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
          <PlaidLink
            publicKey='dd4a42fe52273d06efafcc208601f9'
            product={this.plaidProducts()}
            env='development'
            clientName='Sledgr.com'
            onSuccess={this.handleOnSuccess}
          />
        </div>

        {this.renderCreateProfileLink()}
        <AccountVisualization />
        <RewardVisual />
        <div className='jumbotron'>
          Total Transactions: <Transactions />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, actions)(Dashboard)
