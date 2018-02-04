import * as types from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case types.SUBMIT_GOAL:
      return {
        balances: action.payload.balances,
        _id: action.payload._id,
        _user: action.payload._user
      }
    default:
      return state
  }
}
