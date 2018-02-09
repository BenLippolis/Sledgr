import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as actions from '../../../actions'
import { connect } from 'react-redux'
import AccountVisualization from './Active/AccountVisualization'
import RewardVisual from './Active/RewardVisual'
import PlaidLink from './Welcome/PlaidLink'
import TransactionList from './Setup/TransactionList'
import axios from 'axios'
import MaxSavings from '../../profile/profileShow/MaxSavings'

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
    this.props.fetchGoals()
    if (this.props.auth.access_token) {
      this.props.fetchBalance()
    }
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
    if (this.props.auth.access_token == null) {
      return (
        <PlaidLink
          publicKey='dd4a42fe52273d06efafcc208601f9'
          product={this.plaidProducts()}
          env='sandbox'
          clientName='Sledgr.com'
          onSuccess={this.handleOnSuccess}
        />
      )
    } else {
      return <h5> Current Balance: ${this.props.balance} </h5>
    }
  }

  renderTransactions () {
    switch (this.props.auth.access_token == null) {
      case true:
        return
      case false:
        return (
          <div>
            <p> Here are your transactions from the last month </p>
            <TransactionList />
          </div>
        )
    }
  }

  renderData () {
    var vals = []
    this.props.goals.map(g => {
      g.balances.map(b => {
        vals.push(b.value)
      })
    })
    return vals
  }

  renderGoals () {
    return this.renderData().map(bal => {
      return (
        <div>
          <h3>{bal} </h3>
        </div>
      )
    })
  }

  onContinueClick (stage) {
    this.props.updateStage(stage)
  }

  render () {
    switch (this.props.profile.stage) {
      case 0:
        return (
          <div className='jumbotron text-center branding'>
            <h1> Welcome to Sledgr! </h1>
            {this.renderCreateProfileLink()}
            <p> Please connect your bank account... </p>
            {this.renderConnectAccount()}
            <button
              className='btn btn-primary'
              onClick={this.onContinueClick.bind(this, 1)}
            >
              {' '}Continue!{' '}
            </button>
          </div>
        )
      case 1:
        return (
          <div className='text-center'>
            <MaxSavings />
          </div>
        )
      case 2:
        return (
          <div>
            <AccountVisualization />
            <RewardVisual />
            {this.props.goals.length} Goals
            {this.renderTransactions()}
          </div>
        )
    }
    return <div />
  }
}

function mapStateToProps (state) {
  return {
    profile: state.profile,
    balance: state.balance,
    auth: state.auth,
    goals: state.goals
  }
}

export default connect(mapStateToProps, actions)(Dashboard)
