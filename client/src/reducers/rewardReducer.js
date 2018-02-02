import * as types from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case types.SUBMIT_REWARD:
      return {
        category1: action.payload.category1,
        category2: action.payload.category2,
        category3: action.payload.category3,
        description: action.payload.description,
        _id: action.payload._id,
        _user: action.payload._user
      }
    default:
      return state
  }
}
