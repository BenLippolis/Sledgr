import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTransactions, fetchBalance } from '../../../actions'

class TransactionList extends Component {
  componentDidMount () {
    if (this.props.auth.access_token) {
      this.props.fetchTransactions()
      this.props.fetchBalance()
    }
  }

  render () {
    return this.props.transactions.map(txn => {
      return (
        <div className='card' key={txn.transaction_id}>
          <div className='card-body'>
            <p className='card-text'>
              ${txn.amount}
            </p>
          </div>
        </div>
      )
    })
  }
}

function mapStateToProps (state) {
  return {
    transactions: state.transactions,
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchTransactions, fetchBalance })(
  TransactionList
)
