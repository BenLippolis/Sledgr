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
        maxSavings: action.payload.maxSavings,
        showMaxSavings: action.payload.showMaxSavings,
        targetSavings: action.payload.targetSavings,
        percentSaved: action.payload.percentSaved,
        monthlySpend: action.payload.monthlySpend,
        percentSpent: action.payload.percentSaved,
        rewardSchedule: action.payload.rewardSchedule,
        rewardBudget: action.payload.rewardBudget,
        activeGoal: action.payload.activeGoal,
        rewardType: action.payload.rewardType,
        rewardNotes: action.payload.rewardNotes,
        expenses: action.payload.expenses
      }

    case types.SUBMIT_INFLOW:
      return {
        ...state,
        maxSavings: state.maxSavings + action.payload.amount,
        targetSavings: (state.maxSavings + action.payload.amount) *
          state.percentSaved,
        monthlySpend: (state.maxSavings + action.payload.amount) *
          state.percentSaved *
          state.percentSpent
      }

    case types.DELETE_INFLOW:
      return {
        ...state,
        maxSavings: state.maxSavings - action.payload.amount,
        targetSavings: (state.maxSavings - action.payload.amount) *
          state.percentSaved,
        monthlySpend: (state.maxSavings - action.payload.amount) *
          state.percentSaved *
          state.percentSpent
      }

    case types.SUBMIT_OUTFLOW:
      return {
        ...state,
        maxSavings: state.maxSavings - action.payload.amount,
        targetSavings: (state.maxSavings - action.payload.amount) *
          state.percentSaved,
        monthlySpend: (state.maxSavings - action.payload.amount) *
          state.percentSaved *
          state.percentSpent
      }

    case types.DELETE_OUTFLOW:
      return {
        ...state,
        maxSavings: state.maxSavings + action.payload.amount,
        targetSavings: (state.maxSavings + action.payload.amount) *
          state.percentSaved,
        monthlySpend: (state.maxSavings + action.payload.amount) *
          state.percentSaved *
          state.percentSpent
      }

    case types.UPDATE_REWARD_SCHEDULE:
      return {
        ...state,
        rewardSchedule: action.payload,
        rewardBudget: action.payload * state.monthlySpend
      }

    case types.DECREASE_PERCENT_SAVED:
      return {
        ...state,
        percentSaved: action.payload,
        targetSavings: state.maxSavings * action.payload,
        monthlySpend: state.maxSavings * action.payload * state.percentSpent
      }

    case types.INCREASE_PERCENT_SAVED:
      return {
        ...state,
        percentSaved: action.payload,
        targetSavings: state.maxSavings * action.payload,
        monthlySpend: state.maxSavings * action.payload * state.percentSpent
      }

    case types.INCREASE_PERCENT_SPENT:
      return {
        ...state,
        percentSpent: action.payload,
        monthlySpend: state.targetSavings * action.payload
      }

    case types.DECREASE_PERCENT_SPENT:
      return {
        ...state,
        percentSpent: action.payload,
        monthlySpend: state.targetSavings * action.payload
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
        rewardType: action.payload
      }

    default:
      return state
  }
}
