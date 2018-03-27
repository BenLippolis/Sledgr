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
    if (this.props.transactions.length > 0) {
      return this.props.transactions.map(txn => {
        return (
          <TransactionItem
            key={txn.transaction_id}
            id={txn.transaction_id}
            name={txn.name}
            date={txn.date}
            amount={txn.amount}
          />
        )
      })
    } else {
      return null
    }
  }
}

function mapStateToProps (state) {
  return {
    activeGoal: state.activeGoal,
    transactions: state.transactions,
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchTransactions })(TransactionList)
