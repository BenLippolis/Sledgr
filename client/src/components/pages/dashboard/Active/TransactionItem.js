import React, { Component } from 'react'
import { addBadTxn } from '../../../../actions'
import { connect } from 'react-redux'
import TransactionList from './TransactionList'
import FaClose from 'react-icons/lib/fa/times-circle'

class TransactionItem extends Component {
  onTxnClick (txnId) {
    this.props.addBadTxn(txnId)
  }

  render () {
    return (
      <div className='card'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-10'>
              <p className='card-text'>
                {this.props.name} | ${this.props.amount} | {this.props.date}
              </p>
            </div>
            <div className='col-md-2'>

              <FaClose
                size={30}
                onClick={this.onTxnClick.bind(this, this.props.id)}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { addBadTxn })(TransactionItem)
