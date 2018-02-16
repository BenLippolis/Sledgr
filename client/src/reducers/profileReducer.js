import * as types from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case types.FETCH_PROFILE:
      return action.payload || false

    case types.UPDATE_MAX_SAVINGS:
      return action.payload

    case types.SUBMIT_PROFILE:
      return {
        ...state,
        _id: action.payload._id,
        name: action.payload.name,
        _user: action.payload._user,
        stage: action.payload.stage,
        max_savings: action.payload.max_savings,
        show_max_savings: action.payload.show_max_savings,
        target_savings: action.payload.target_savings,
        percent_saved: action.payload.percent_saved,
        monthly_spend: action.payload.monthly_spend,
        percent_spent: action.payload.percent_saved,
        reward_schedule: action.payload.reward_schedule,
        reward_budget: action.payload.reward_budget,
        active_goal: action.payload.active_goal,
        reward_type: action.payload.reward_type,
        reward_notes: action.payload.reward_notes
      }

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
    case types.UPDATE_STAGE:
      return {
        ...state,
        stage: action.payload
      }
    case types.HANDLE_ON_SUCCESS:
      return {
        ...state,
        stage: action.payload
      }

    case types.UPDATE_REWARD_TYPE:
      return {
        ...state,
        reward_type: action.payload
      }

    default:
      return state
  }
}
