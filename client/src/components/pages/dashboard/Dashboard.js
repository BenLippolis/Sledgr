import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as actions from '../../../actions'
import { connect } from 'react-redux'
import RewardVisual from './Active/RewardVisual'
import PlaidLink from './Welcome/PlaidLink'
import TransactionList from './Active/TransactionList'
import MaxSavings from './Setup/MaxSavings/MaxSavings'
import TargetSavings from './Setup/TargetSavings'
import TargetSpend from './Setup/TargetSpend'
import RewardSelection from './Setup/RewardSelection'
import Begin from './Setup/Begin'
import ProfileCreate from '../../profile/ProfileCreate'
import Visual from './Setup/Visual'
import WeeklyVisual from './Active/WeeklyVisual'
import Roadmap from './Active/Roadmap'

class Dashboard extends Component {
  // Trigger action when account successfully linked
  handleOnSuccess (token, metadata) {
    this.props.handleOnSuccess(token, metadata)
  }

  // Trigger update profile stage action
  handleStage (stage) {
    this.props.updateStage(stage)
  }

  // List Plaid profucts for Plaid Link
  plaidProducts () {
    return ['auth', 'transactions']
  }

  // Fetch profile, goals on component mount
  componentDidMount () {
    this.props.fetchProfile()
    this.props.fetchGoals()
    this.props.fetchActiveGoal()
  }

  // Conditionally render the connect account button based on presence of Plaid access token
  renderConnectAccount () {
    if (this.props.auth.accessToken == null) {
      return (
        <PlaidLink
          publicKey='dd4a42fe52273d06efafcc208601f9'
          product={this.plaidProducts()}
          env='sandbox'
          clientName='Sledgr.com'
          onSuccess={this.handleOnSuccess.bind(this)}
        />
      )
    }
  }

  // Conditionally render transactions based on presence of Plaid access token
  renderTransactions () {
    switch (this.props.auth.accessToken == null) {
      case true:
        return
      case false:
        return (
          <div className='jumbotron'>
            <h3> Weekly Transactions </h3>
            <TransactionList />
          </div>
        )
      default:
    }
  }

  // Render list of goals
  renderGoals () {
    return this.renderData().map(bal => {
      return (
        <div>
          <h3>{bal} </h3>
        </div>
      )
    })
  }

  // Temporary button to move to next stage
  renderContinueButton (stage) {
    return (
      <button
        className='btn btn-primary'
        onClick={this.onContinueClick.bind(this, stage)}
      >
        {' '}Continue{' '}
      </button>
    )
  }

  // Temporary button to move back a stage
  renderBackButton (stage) {
    return (
      <button
        className='btn btn-primary'
        onClick={this.onContinueClick.bind(this, stage)}
      >
        {' '}Go Back{' '}
      </button>
    )
  }

  // Trigger update stage action
  onContinueClick (stage) {
    this.props.updateStage(stage)
  }

  render () {
    switch (this.props.profile.stage) {
      case 0:
        return (
          <div>
            <p> Please connect your bank account... </p>
            {this.renderConnectAccount()}
          </div>
        )
      case 1:
        return (
          <div className='text-center'>
            <MaxSavings />
            <TargetSavings />
            <TargetSpend />
            <RewardSelection />
            <Begin />
            {this.renderContinueButton(2)}
          </div>
        )
      case 2:
        return (
          <div>
            <div className='row'>
              <div className='col-md-6'>
                <WeeklyVisual />
              </div>
              <div className='col-md-6'>
                <RewardVisual />

              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                {this.renderTransactions()}
              </div>
              <div className='col-md-6'>
                <Roadmap />
              </div>
            </div>
            {this.renderContinueButton(3)}
            {this.renderBackButton(1)}
          </div>
        )
      case 3:
        return (
          <div className='text-center'>
            <h1> Yay you completed your goal! </h1>
            {this.renderContinueButton(1)}
          </div>
        )
      default:
        return (
          <div className='jumbotron text-center branding'>
            <h1> Welcome to Sledgr! </h1>
            <div className='row'>
              <div className='col-md-12'>
                <div className='col-md-6 col-md-offset-3'>
                  <ProfileCreate />
                </div>
              </div>
            </div>
          </div>
        )
    }
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
