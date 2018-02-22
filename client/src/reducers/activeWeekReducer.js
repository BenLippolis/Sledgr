import { FETCH_ACTIVE_WEEK } from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ACTIVE_WEEK:
      return action.payload
    default:
      return state
  }
}
