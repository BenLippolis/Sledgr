import React, { Component } from 'react'
import { addBadTxn } from '../../../../actions'
import { connect } from 'react-redux'
import TransactionList from './TransactionList'

class TransactionItem extends Component {
  onTxnClick (txnId) {
    this.props.addBadTxn(txnId)
  }

  render () {
    return (
      <div className='card' key={this.props.id}>
        <div className='card-body'>
          <p className='card-text'>
            {this.props.name} ${this.props.amount}
          </p>
          <button
            className='btn btn-sm btn-danger'
            onClick={this.onTxnClick.bind(this, this.props.id)}
          >
            Remove
          </button>
        </div>
      </div>
    )
  }
}

export default connect(null, { addBadTxn })(TransactionItem)
