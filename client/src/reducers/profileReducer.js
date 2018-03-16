import * as types from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case types.FETCH_PROFILE:
      return action.payload || false

    case types.SUBMIT_PROFILE:
      return {
        ...state,
        _id: action.payload._id,
        name: action.payload.name,
        _user: action.payload._user,
        stage: action.payload.stage,
        weeklyMaxSavings: action.payload.weeklyMaxSavings,
        weeklyTargetSavings: action.payload.weeklyTargetSavings,
        percentSaved: action.payload.percentSaved,
        weeklyTargetSpend: action.payload.weeklyTargetSpend,
        percentSpent: action.payload.percentSaved,
        rewardSchedule: action.payload.rewardSchedule,
        rewardBudget: action.payload.rewardBudget,
        activeGoal: action.payload.activeGoal,
        rewardType: action.payload.rewardType,
        rewardNotes: action.payload.rewardNotes,
        expenses: action.payload.expenses
      }

    case types.UPDATE_REWARD_SCHEDULE:
      return {
        ...state,
        rewardSchedule: action.payload,
        rewardBudget: action.payload * state.weeklyTargetSpend
      }

    case types.DECREASE_PERCENT_SAVED:
      return {
        ...state,
        percentSaved: action.payload
      }

    case types.INCREASE_PERCENT_SAVED:
      return {
        ...state,
        percentSaved: action.payload
      }

    case types.INCREASE_PERCENT_SPENT:
      return {
        ...state,
        percentSpent: action.payload
      }

    case types.DECREASE_PERCENT_SPENT:
      return {
        ...state,
        percentSpent: action.payload
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

    case types.ADD_EXPENSE:
      return {
        ...state,
        expenses: action.payload.expenses
      }

    case types.UPDATE_EXPENSE:
      return {
        ...state,
        expenses: action.payload.expenses
      }

    case types.DELETE_EXPENSE:
      return {
        ...state,
        expenses: action.payload.expenses
      }

    case types.ADD_INCOME:
      return {
        ...state,
        income: action.payload.income,
        incomeFrequency: action.payload.incomeFrequency
      }

    default:
      return state
  }
}
