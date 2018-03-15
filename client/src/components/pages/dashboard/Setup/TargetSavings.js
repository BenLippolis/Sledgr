import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreasePercentSaved, increasePercentSaved } from '../../../../actions'
import roundTo from 'round-to'

class TargetSavings extends Component {
  calTotalExpenses () {
    var total = 0
    this.props.profile.expenses.forEach(function (exp) {
      total += exp.amount
    })
    return total * 12 / 52
  }

  onSaveDecrementClick (profile) {
    this.props.decreasePercentSaved(profile)
  }

  onSaveIncrementClick (profile) {
    this.props.increasePercentSaved(profile)
  }

  render () {
    var maxSavings =
      this.props.profile.income / this.props.profile.incomeFrequency -
      this.calTotalExpenses()
    return (
      <div className='jumbotron white text-center'>
        <h4>
          How much do you want to aim to save every week?
        </h4>
        <div className='row'>
          <div className='col-md-4' />
          <div className='col-md-1'>
            <button
              className='btn btn-primary'
              onClick={this.onSaveDecrementClick.bind(this, this.props.profile)}
            >
              {' '}-
            </button>
          </div>
          <div className='col-md-2'>
            <h4> {roundTo(this.props.profile.percentSaved * 100, 0)}% </h4>
          </div>
          <div className='col-md-1'>
            <button
              className='btn btn-primary'
              onClick={this.onSaveIncrementClick.bind(this, this.props.profile)}
            >
              +{' '}
            </button>
          </div>
        </div>

        <p>
          {' '}
          If you save
          {' '}
          <b>{roundTo(this.props.profile.percentSaved * 100, 0)}</b>
          % of the money you can possibly save you'll be saving
          {' '}
          <b>${roundTo(maxSavings * this.props.profile.percentSaved, 0)}</b>
          {' '}
          every week.
          {' '}
          <br />
          You can save that much and still have          $
          <b>
            {roundTo(
              this.props.profile.weeklyMaxSavings -
                this.props.profile.weeklyTargetSavings,
              0
            )}
          </b>
          {' '}
          to spend on extra stuff every week :)
        </p>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, {
  decreasePercentSaved,
  increasePercentSaved
})(TargetSavings)
