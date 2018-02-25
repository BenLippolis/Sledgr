import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import authReducer from './authReducer'
import profileReducer from './profileReducer'
import transactionsReducer from './transactionsReducer'
import balanceReducer from './balanceReducer'
import goalsReducer from './goalsReducer'
import activeWeekReducer from './activeWeekReducer'

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  profile: profileReducer,
  transactions: transactionsReducer,
  balance: balanceReducer,
  goals: goalsReducer,
  activeWeek: activeWeekReducer
})
