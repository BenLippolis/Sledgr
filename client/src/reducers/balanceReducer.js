import { FETCH_BALANCE } from '../actions/types'

// Return zero by default
export default function (state = 0, action) {
  switch (action.type) {
    case FETCH_BALANCE:
      return action.payload
    default:
      return state
  }
}
