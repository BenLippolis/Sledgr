import { FETCH_TRANSACTIONS } from '../actions/types'

// Return empty array (of transactions) by default
export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return action.payload
    default:
      return state
  }
}
