import { FETCH_TRANSACTIONS, ADD_BAD_TXN } from '../actions/types'

// Return empty array (of transactions) by default
export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return action.payload
    case ADD_BAD_TXN:
      const txns = state.filter(txn => txn.transaction_id !== action.payload)
      return txns
    default:
      return state
  }
}
