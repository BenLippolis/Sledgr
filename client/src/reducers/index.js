import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import authReducer from './authReducer'
import surveysReducer from './surveysReducer'
import profileReducer from './profileReducer'
import inflowsReducer from './inflowsReducer'
import outflowsReducer from './outflowsReducer'
import transactionsReducer from './transactionsReducer'
import balanceReducer from './balanceReducer'
import rewardReducer from './rewardReducer'
import goalsReducer from './goalsReducer'

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
  profile: profileReducer,
  inflows: inflowsReducer,
  outflows: outflowsReducer,
  transactions: transactionsReducer,
  balance: balanceReducer,
  reward: rewardReducer,
  goals: goalsReducer
})
