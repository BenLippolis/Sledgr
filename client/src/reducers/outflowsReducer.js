import {
  FETCH_OUTFLOWS,
  SUBMIT_OUTFLOW,
  DELETE_OUTFLOW
} from '../actions/types'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_OUTFLOWS:
      return action.payload

    case SUBMIT_OUTFLOW:
      return [
        ...state,
        {
          title: action.payload.title,
          amount: action.payload.amount,
          _id: action.payload._id,
          _user: action.payload._user
        }
      ]

    case DELETE_OUTFLOW:
      const outflows = state.filter(
        outflow => outflow._id !== action.payload._id
      )
      return outflows

    default:
      return state
  }
}
