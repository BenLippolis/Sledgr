import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTransactions, addBadTxn } from '../../../../actions'

class TransactionList extends Component {
  componentDidMount () {
    if (this.props.auth.accessToken) {
      this.props.fetchTransactions()
    }
  }

  onTxnClick (txnId) {
    this.props.addBadTxn(txnId)
  }

  render () {
    return this.props.transactions.map(txn => {
      return (
        <div className='card' key={txn.transaction_id}>
          <div className='card-body'>
            <p className='card-text'>
              {txn.name} ${txn.amount}
            </p>
            <button
              className='btn btn-sm btn-danger'
              onClick={this.onTxnClick.bind(this, txn.transaction_id)}
            >
              Remove
            </button>
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

export default connect(mapStateToProps, { fetchTransactions, addBadTxn })(
  TransactionList
)
