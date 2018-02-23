import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchActiveWeek } from '../../../../actions'

class WeeklyVisual extends Component {
  componentDidMount () {
    this.props.fetchActiveWeek()
  }

  calTotalSpend () {
    var total = 0
    this.props.transactions.forEach(function (txn) {
      total += txn.amount
    })
    return total
  }

  render () {
    return (
      <div>
        <h3> Weekly visual </h3>
        <div className='progress'>
          <div
            className='progress-bar'
            role='progressbar'
            style={{
              width: (1 -
                this.calTotalSpend() / this.props.activeWeek.max_spend) *
                100 +
                '%'
            }}
            aria-valuenow='25'
            aria-valuemin='0'
            aria-valuemax='100'
          >
            ${this.props.activeWeek.max_spend - this.calTotalSpend()}
          </div>
        </div>
        <p />
        <p />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    profile: state.profile,
    activeWeek: state.activeWeek,
    transactions: state.transactions
  }
}

export default connect(mapStateToProps, { fetchActiveWeek })(WeeklyVisual)
