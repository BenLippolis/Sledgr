import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTransactions } from '../../../../actions'
import TransactionItem from './TransactionItem'

class TransactionList extends Component {
  componentDidMount () {
    if (this.props.auth.accessToken) {
      this.props.fetchTransactions()
    }
  }

  render () {
    return this.props.transactions.map(txn => {
      return (
        <TransactionItem
          name={txn.name}
          amount={txn.amount}
          id={txn.transaction_id}
        />
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
