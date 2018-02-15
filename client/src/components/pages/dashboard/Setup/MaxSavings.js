import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateMaxSavings, fetchBalance } from '../../../../actions'

class MaxSavings extends Component {
  componentDidMount () {
    this.props.fetchBalance()
  }

  renderProfileMaxSavings () {
    if (this.props.profile) {
      return this.props.profile.max_savings
    }
  }

  onUpdateClick (value) {
    this.props.updateMaxSavings(value)
  }

  renderDoneButton () {
    switch (this.props.profile.show_max_savings) {
      case null:
        return
      case false:
        return (
          <button
            className='btn btn-primary btn-sm'
            onClick={this.onUpdateClick.bind(this, true)}
          >
            {' '}
            Edit Max Savings{' '}
          </button>
        )
      case true:
        return (
          <button
            className='btn btn-danger btn-sm'
            onClick={this.onUpdateClick.bind(this, false)}
          >
            {' '}
            Done Editing{' '}
          </button>
        )
      default:
    }
  }

  render () {
    return (
      <div className='jumbotron'>
        <h4>
          {' '}
          How much can you save every month? $
          {this.renderProfileMaxSavings()}
          {' '}
        </h4>
        {this.renderDoneButton()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, { updateMaxSavings, fetchBalance })(
  MaxSavings
)
