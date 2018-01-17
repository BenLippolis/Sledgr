import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTransactions } from '../../../actions'

class TransactionList extends Component {
  componentDidMount () {
    this.props.fetchTransactions()
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
  return { transactions: state.transactions }
}

export default connect(mapStateToProps, { fetchTransactions })(TransactionList)
