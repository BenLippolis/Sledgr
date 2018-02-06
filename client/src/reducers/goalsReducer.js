import * as types from '../actions/types'

export default function (state = [], action) {
  switch (action.type) {
    case types.SUBMIT_GOAL:
      return [
        ...state,
        {
          balances: action.payload.balances,
          _id: action.payload._id,
          _user: action.payload._user
        }
      ]
    case types.FETCH_GOALS:
      return action.payload
    default:
      return state
  }
}
