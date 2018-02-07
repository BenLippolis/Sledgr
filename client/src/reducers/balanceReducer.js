import { FETCH_BALANCE } from '../actions/types'

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_BALANCE:
      return action.payload
    default:
      return state
  }
}
