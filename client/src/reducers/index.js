import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import authReducer from './authReducer'
import surveysReducer from './surveysReducer'
import profileReducer from './profileReducer'
import inflowsReducer from './inflowsReducer'
import outflowsReducer from './outflowsReducer'

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
  profile: profileReducer,
  inflows: inflowsReducer,
  outflows: outflowsReducer
})
