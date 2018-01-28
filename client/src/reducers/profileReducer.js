import * as types from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case types.FETCH_PROFILE:
      return action.payload || false

    case types.UPDATE_MAX_SAVINGS:
      return action.payload

    case types.SUBMIT_INFLOW:
      return {
        ...state,
        max_savings: state.max_savings + action.payload.amount,
        target_savings: (state.max_savings + action.payload.amount) *
          state.percent_saved,
        monthly_spend: (state.max_savings + action.payload.amount) *
          state.percent_saved *
          state.percent_spent
      }

    case types.DELETE_INFLOW:
      return {
        ...state,
        max_savings: state.max_savings - action.payload.amount,
        target_savings: (state.max_savings - action.payload.amount) *
          state.percent_saved,
        monthly_spend: (state.max_savings - action.payload.amount) *
          state.percent_saved *
          state.percent_spent
      }

    case types.SUBMIT_OUTFLOW:
      return {
        ...state,
        max_savings: state.max_savings - action.payload.amount,
        target_savings: (state.max_savings - action.payload.amount) *
          state.percent_saved,
        monthly_spend: (state.max_savings - action.payload.amount) *
          state.percent_saved *
          state.percent_spent
      }

    case types.DELETE_OUTFLOW:
      return {
        ...state,
        max_savings: state.max_savings + action.payload.amount,
        target_savings: (state.max_savings + action.payload.amount) *
          state.percent_saved,
        monthly_spend: (state.max_savings + action.payload.amount) *
          state.percent_saved *
          state.percent_spent
      }

    case types.UPDATE_REWARD_SCHEDULE:
      return {
        ...state,
        reward_schedule: action.payload,
        reward_budget: action.payload * state.monthly_spend
      }

    case types.DECREASE_PERCENT_SAVED:
      return {
        ...state,
        percent_saved: action.payload,
        target_savings: state.max_savings * action.payload,
        monthly_spend: state.max_savings * action.payload * state.percent_spent
      }

    case types.INCREASE_PERCENT_SAVED:
      return {
        ...state,
        percent_saved: action.payload,
        target_savings: state.max_savings * action.payload,
        monthly_spend: state.max_savings * action.payload * state.percent_spent
      }

    case types.INCREASE_PERCENT_SPENT:
      return {
        ...state,
        percent_spent: action.payload,
        monthly_spend: state.target_savings * action.payload
      }
    case types.DECREASE_PERCENT_SPENT:
      return {
        ...state,
        percent_spent: action.payload,
        monthly_spend: state.target_savings * action.payload
      }

    default:
      return state
  }
}
