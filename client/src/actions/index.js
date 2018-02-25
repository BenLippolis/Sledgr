import axios from 'axios'
import * as types from './types'

// ------------------------------------- Users ----------------------------------------------------- //
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: types.FETCH_USER, payload: res.data })
}

// ------------------------------------- Profiles -------------------------------------------------- //
export const submitProfile = (values, history) => async dispatch => {
  const res = await axios.post('/api/profile', values)
  history.push('/')
  dispatch({ type: types.SUBMIT_PROFILE, payload: res.data })
}

export const addNotes = values => async dispatch => {
  await axios.patch('/api/profile/update', values)
  dispatch({ type: types.ADD_NOTES })
}

export const addIncome = values => async dispatch => {
  await axios.patch('/api/profile/update', values)
  dispatch({ type: types.ADD_INCOME })
}

export const fetchProfile = () => async dispatch => {
  const res = await axios.get('/api/profile')
  dispatch({ type: types.FETCH_PROFILE, payload: res.data })
}

// Updates MaxSavings component visibility
export const updateMaxSavings = value => async dispatch => {
  const res = await axios.patch('/api/profile/update', {
    showMaxSavings: value
  })
  dispatch({ type: types.UPDATE_MAX_SAVINGS, payload: res.data })
}

// Updates the frequency and $ value of the profiles reward schedule
export const updateRewardSchedule = (frequency, profile) => dispatch => {
  axios.patch('/api/profile/update', {
    rewardSchedule: frequency,
    rewardBudget: frequency * profile.monthlySpend
  })
  dispatch({ type: types.UPDATE_REWARD_SCHEDULE, payload: frequency })
}

// Decreases the profiles percent saved by 1% and updates dependent values accordingly (target savings, monthly spend)
export const decreasePercentSaved = profile => dispatch => {
  axios.patch('/api/profile/update', {
    percentSaved: profile.percentSaved - 0.01,
    targetSavings: profile.maxSavings * (profile.percentSaved - 0.01),
    monthlySpend: profile.maxSavings *
      (profile.percentSaved - 0.01) *
      profile.percentSpent
  })
  dispatch({
    type: types.DECREASE_PERCENT_SAVED,
    payload: profile.percentSaved - 0.01
  })
}

// Increases the profiles percent saved by 1% and updates dependent values accordingly (target savings, monthly spend)
export const increasePercentSaved = profile => dispatch => {
  axios.patch('/api/profile/update', {
    percentSaved: profile.percentSaved + 0.01,
    targetSavings: profile.maxSavings * (profile.percentSaved + 0.01),
    monthlySpend: profile.maxSavings *
      (profile.percentSaved + 0.01) *
      profile.percentSpent
  })
  dispatch({
    type: types.INCREASE_PERCENT_SAVED,
    payload: profile.percentSaved + 0.01
  })
}

// Decreases the profiles percent spent by 1% and updates dependent values accordingly (monthly spend)
export const decreasePercentSpent = profile => dispatch => {
  axios.patch('/api/profile/update', {
    percentSpent: profile.percentSpent - 0.01,
    monthlySpend: profile.targetSavings * (profile.percentSpent - 0.01)
  })
  dispatch({
    type: types.DECREASE_PERCENT_SPENT,
    payload: profile.percentSpent - 0.01
  })
}

// Increases the profiles percent spent by 1% and updates dependent values accordingly (monthly spend)
export const increasePercentSpent = profile => dispatch => {
  axios.patch('/api/profile/update', {
    percentSpent: profile.percentSpent + 0.01,
    monthlySpend: profile.targetSavings * (profile.percentSpent + 0.01)
  })
  dispatch({
    type: types.INCREASE_PERCENT_SPENT,
    payload: profile.percentSpent + 0.01
  })
}

// Update the stage of the user to the given value
export const updateStage = stage => dispatch => {
  axios.patch('/api/profile/update', {
    stage: stage
  })
  dispatch({
    type: types.UPDATE_STAGE,
    payload: stage
  })
}

// Update the type of reward the users wants when they reach goal
export const updateRewardType = type => dispatch => {
  axios.patch('/api/profile/update', {
    rewardType: type
  })
  dispatch({
    type: types.UPDATE_REWARD_TYPE,
    payload: type
  })
}

// Update the notes for reward the users wants when they reach goal
export const updateRewardNotes = notes => dispatch => {
  axios.patch('/api/profile/update', {
    rewardNotes: notes
  })
  dispatch({
    type: types.UPDATE_REWARD_NOTES,
    payload: notes
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
    inflowId: inflow._id
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
    outflowId: outflow._id
  })
  dispatch({ type: types.DELETE_OUTFLOW, payload: outflow })
}

// ------------------------------------- Plaid -------------------------------------------------- //
// Exchanges public token for access token courtesy of Plaid
export const getAccessToken = (token, metadata) => dispatch => {
  axios.post('/api/get_access_token', {
    public_token: token,
    accounts: metadata.accounts,
    institution: metadata.institution,
    link_session_id: metadata.link_session_id
  })
  dispatch({ type: types.GET_ACCESS_TOKEN, payload: token })
}

// Gets transactions of users linked account courtesy of Plaid
export const fetchTransactions = () => async dispatch => {
  const res = await axios.get('/api/transactions')
  dispatch({ type: types.FETCH_TRANSACTIONS, payload: res.data })
}

// Gets balance of users linked account courtesy of Plaid
export const fetchBalance = () => async dispatch => {
  const res = await axios.get('/api/balance')
  dispatch({ type: types.FETCH_BALANCE, payload: res.data })
}

export const handleOnSuccess = (token, metadata) => async dispatch => {
  await axios.post('/api/get_access_token', {
    public_token: token,
    accounts: metadata.accounts,
    institution: metadata.institution,
    link_session_id: metadata.link_session_id
  })
  dispatch({ type: types.HANDLE_ON_SUCCESS, payload: 1 })
}

// ------------------------------------- Goal -------------------------------------------------- //
export const submitGoal = profile => async dispatch => {
  const res = await axios.post('/api/goal', {
    maxSpend: (profile.maxSavings - profile.targetSavings) / 4
  })
  dispatch({ type: types.SUBMIT_GOAL, payload: res.data })
}

export const fetchGoals = () => async dispatch => {
  const res = await axios.get('/api/goals')
  dispatch({ type: types.FETCH_GOALS, payload: res.data })
}

export const fetchActiveWeek = () => async dispatch => {
  const res = await axios.get('/api/active_week')
  dispatch({ type: types.FETCH_ACTIVE_WEEK, payload: res.data })
}
