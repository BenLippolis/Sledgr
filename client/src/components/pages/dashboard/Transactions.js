import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTransactions } from '../../../actions'

class Transactions extends Component {
  componentDidMount () {
    this.props.fetchTransactions()
  }

  render () {
    return this.props.transactions
  }
}

function mapStateToProps (state) {
  return { transactions: state.transactions }
}

export default connect(mapStateToProps, { fetchTransactions })(Transactions)
