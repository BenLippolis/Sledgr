import { FETCH_ACTIVE_GOAL } from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ACTIVE_GOAL:
      return action.payload
    default:
      return state
  }
}
