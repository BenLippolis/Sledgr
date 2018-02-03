import axios from 'axios'
import * as types from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: types.FETCH_USER, payload: res.data })
}

// ------------------------------------- Surveys -------------------------------------------------- //

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values)
  // We pass the history object to the action creator using the onClick callback
  // In the component to access react router for redirection after survey creation
  history.push('/')
  dispatch({ type: types.SUBMIT_SURVEY, payload: res.data })
}

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys')
  // Payload == data in the response generated by the endpoint
  dispatch({ type: types.FETCH_SURVEYS, payload: res.data })
}

// ------------------------------------- Profiles -------------------------------------------------- //
export const submitProfile = (values, history) => async dispatch => {
  const res = await axios.post('/api/profile', values)
  history.push('/')
  dispatch({ type: types.SUBMIT_PROFILE, payload: res.data })
}

export const fetchProfile = () => async dispatch => {
  const res = await axios.get('/api/profile')
  dispatch({ type: types.FETCH_PROFILE, payload: res.data })
}

export const updateMaxSavings = value => async dispatch => {
  const res = await axios.patch('/api/profile/update', {
    show_max_savings: value
  })
  dispatch({ type: types.UPDATE_MAX_SAVINGS, payload: res.data })
}

export const updateRewardSchedule = (value, profile) => dispatch => {
  axios.patch('/api/profile/update', {
    reward_schedule: value,
    reward_budget: value * profile.monthly_spend
  })
  dispatch({ type: types.UPDATE_REWARD_SCHEDULE, payload: value })
}

export const decreasePercentSaved = profile => dispatch => {
  axios.patch('/api/profile/update', {
    percent_saved: profile.percent_saved - 0.01,
    target_savings: profile.max_savings * (profile.percent_saved - 0.01),
    monthly_spend: profile.max_savings *
      (profile.percent_saved - 0.01) *
      profile.percent_spent
  })
  dispatch({
    type: types.DECREASE_PERCENT_SAVED,
    payload: profile.percent_saved - 0.01
  })
}

export const increasePercentSaved = profile => dispatch => {
  axios.patch('/api/profile/update', {
    percent_saved: profile.percent_saved + 0.01,
    target_savings: profile.max_savings * (profile.percent_saved + 0.01),
    monthly_spend: profile.max_savings *
      (profile.percent_saved + 0.01) *
      profile.percent_spent
  })
  dispatch({
    type: types.INCREASE_PERCENT_SAVED,
    payload: profile.percent_saved + 0.01
  })
}

export const decreasePercentSpent = profile => dispatch => {
  axios.patch('/api/profile/update', {
    percent_spent: profile.percent_spent - 0.01,
    monthly_spend: profile.target_savings * (profile.percent_spent - 0.01)
  })
  dispatch({
    type: types.DECREASE_PERCENT_SPENT,
    payload: profile.percent_spent - 0.01
  })
}

export const increasePercentSpent = profile => dispatch => {
  axios.patch('/api/profile/update', {
    percent_spent: profile.percent_spent + 0.01,
    monthly_spend: profile.target_savings * (profile.percent_spent + 0.01)
  })
  dispatch({
    type: types.INCREASE_PERCENT_SPENT,
    payload: profile.percent_spent + 0.01
  })
}

// ------------------------------------- Inflows -------------------------------------------------- //

export const submitInflow = (values, history) => async dispatch => {
  const res = await axios.post('/api/inflow', values)
  dispatch({ type: types.SUBMIT_INFLOW, payload: res.data })
}

export const fetchInflows = () => async dispatch => {
  const res = await axios.get('/api/inflows')
  dispatch({ type: types.FETCH_INFLOWS, payload: res.data })
}

export const deleteInflow = inflow => async dispatch => {
  await axios.post('/api/inflow/delete', {
    inflow_id: inflow._id
  })
  dispatch({ type: types.DELETE_INFLOW, payload: inflow })
}

// ------------------------------------- Outflows -------------------------------------------------- //

export const submitOutflow = (values, history) => async dispatch => {
  const res = await axios.post('/api/outflow', values)
  dispatch({ type: types.SUBMIT_OUTFLOW, payload: res.data })
}
export const fetchOutflows = () => async dispatch => {
  const res = await axios.get('/api/outflows')
  dispatch({ type: types.FETCH_OUTFLOWS, payload: res.data })
}

export const deleteOutflow = outflow => async dispatch => {
  await axios.post('/api/outflow/delete', {
    outflow_id: outflow._id
  })
  dispatch({ type: types.DELETE_OUTFLOW, payload: outflow })
}

// ------------------------------------- Plaid -------------------------------------------------- //

export const getAccessToken = (token, metadata) => dispatch => {
  axios.post('/api/get_access_token', {
    public_token: token,
    accounts: metadata.accounts,
    institution: metadata.institution,
    link_session_id: metadata.link_session_id
  })
  dispatch({ type: types.GET_ACCESS_TOKEN, payload: token })
}

export const fetchTransactions = () => async dispatch => {
  const res = await axios.get('/api/transactions')
  dispatch({ type: types.FETCH_TRANSACTIONS, payload: res.data })
}

export const fetchBalance = () => async dispatch => {
  const res = await axios.get('/api/balance')
  dispatch({ type: types.FETCH_BALANCE, payload: res.data })
}

// ------------------------------------- Reward -------------------------------------------------- //

export const submitReward = values => async dispatch => {
  const res = await axios.post('/api/reward', values)
  dispatch({ type: types.SUBMIT_REWARD, payload: res.data })
}

// ------------------------------------- Goal -------------------------------------------------- //

export const submitGoal = () => async dispatch => {
  axios.post('/api/goal')
  dispatch({ type: types.SUBMIT_GOAL })
}
