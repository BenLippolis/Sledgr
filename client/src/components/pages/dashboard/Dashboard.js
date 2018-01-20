import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as actions from '../../../actions'
import { connect } from 'react-redux'
import AccountVisualization from './AccountVisualization'
import RewardVisual from './RewardVisual'
import PlaidLink from './PlaidLink'
import TransactionList from './TransactionList'
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
    return ['auth', 'transactions']
  }

  componentDidMount () {
    this.props.fetchProfile()
  }

  renderCreateProfileLink () {
    switch (this.props.profile) {
      case false:
        return (
          <div>
            <Link to={'/profile/create'} className='btn btn-primary'>
              Create Profile
            </Link>
          </div>
        )
      default:
    }
  }

  // Conditionally render the connect account button based on account balance
  renderConnectAccount () {
    switch (this.props.auth.access_token != null) {
      case false:
        return (
          <PlaidLink
            publicKey='dd4a42fe52273d06efafcc208601f9'
            product={this.plaidProducts()}
            env='development'
            clientName='Sledgr.com'
            onSuccess={this.handleOnSuccess}
          />
        )
      case true:
        return <h5> Current Balance: ${this.props.balance} </h5>
      default:
    }
  }

  render () {
    return (
      <div>
        <div className='jumbotron text-center branding'>
          <h1> Welcome to your digital dash </h1>
          {this.renderConnectAccount()}
        </div>

        {this.renderCreateProfileLink()}
        <AccountVisualization />
        <RewardVisual />
        <div>
          Transactions in the last 30 days:
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    profile: state.profile,
    balance: state.balance,
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(Dashboard)
