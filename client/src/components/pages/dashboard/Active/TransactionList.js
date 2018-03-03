import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTransactions } from '../../../../actions'

class TransactionList extends Component {
  componentDidMount () {
    if (this.props.auth.accessToken) {
      this.props.fetchTransactions()
    }
  }

  render () {
    return this.props.transactions.map(txn => {
      return (
        <div className='card' key={txn.transaction_id}>
          <div className='card-body'>
            <p className='card-text'>
              {txn.name} ${txn.amount}
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

export default connect(mapStateToProps, { fetchTransactions })(TransactionList)
