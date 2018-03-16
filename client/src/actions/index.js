import axios from 'axios'
import * as types from './types'

// ------------------------------------- User ----------------------------------------------------- //
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: types.FETCH_USER, payload: res.data })
}

// ------------------------------------- Profile -------------------------------------------------- //
// Create a new profile
export const submitProfile = (values, history) => async dispatch => {
  const res = await axios.post('/api/profile', values)
  history.push('/')
  dispatch({ type: types.SUBMIT_PROFILE, payload: res.data })
}

// Retrieve the profile
export const fetchProfile = () => async dispatch => {
  const res = await axios.get('/api/profile')
  dispatch({ type: types.FETCH_PROFILE, payload: res.data })
}

// Add notes to profile
export const addNotes = values => async dispatch => {
  await axios.patch('/api/profile/update', values)
  dispatch({ type: types.ADD_NOTES })
}

// Add income to profile
export const addIncome = values => async dispatch => {
  const res = await axios.patch('/api/profile/update', values)
  dispatch({ type: types.ADD_INCOME, payload: res.data })
}

// Add expense to profile
export const addExpense = values => async dispatch => {
  const res = await axios.patch('/api/profile/expense', values)
  dispatch({ type: types.ADD_EXPENSE, payload: res.data })
}

// Update expense
export const updateExpense = (values, expense_id) => async dispatch => {
  const all_values = {
    title: values.title,
    amount: values.amount,
    expense_id: expense_id
  }
  const res = await axios.patch('/api/profile/expense/update', all_values)
  dispatch({ type: types.UPDATE_EXPENSE, payload: res.data })
}

// Delete expense from profile
export const deleteExpense = expense => async dispatch => {
  const res = await axios.patch('/api/profile/expense/delete', {
    expense: expense
  })
  dispatch({ type: types.DELETE_EXPENSE, payload: res.data })
}

// Decreases the profiles percent saved by 1% and updates dependent values accordingly (target savings, monthly spend)
export const decreasePercentSaved = profile => dispatch => {
  axios.patch('/api/profile/update', {
    percentSaved: profile.percentSaved - 0.01
  })
  dispatch({
    type: types.DECREASE_PERCENT_SAVED,
    payload: profile.percentSaved - 0.01
  })
}

// Increases the profiles percent saved by 1% and updates dependent values accordingly (target savings, monthly spend)
export const increasePercentSaved = profile => dispatch => {
  axios.patch('/api/profile/update', {
    percentSaved: profile.percentSaved + 0.01
  })
  dispatch({
    type: types.INCREASE_PERCENT_SAVED,
    payload: profile.percentSaved + 0.01
  })
}

// Decreases the profiles percent spent by 1% and updates dependent values accordingly (monthly spend)
export const decreasePercentSpent = profile => dispatch => {
  axios.patch('/api/profile/update', {
    percentSpent: profile.percentSpent - 0.01
  })
  dispatch({
    type: types.DECREASE_PERCENT_SPENT,
    payload: profile.percentSpent - 0.01
  })
}

// Increases the profiles percent spent by 1% and updates dependent values accordingly (monthly spend)
export const increasePercentSpent = profile => dispatch => {
  axios.patch('/api/profile/update', {
    percentSpent: profile.percentSpent + 0.01
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

// Updates the frequency and $ value of the profiles reward schedule
export const updateRewardSchedule = (frequency, profile) => dispatch => {
  axios.patch('/api/profile/update', {
    rewardSchedule: frequency,
    rewardBudget: frequency * profile.weeklyTargetSpend
  })
  dispatch({ type: types.UPDATE_REWARD_SCHEDULE, payload: frequency })
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

// Passes Plaid data to server when account successfully connected
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
// Create a goal
export const submitGoal = (profile, weeklySpend) => async dispatch => {
  const res = await axios.post('/api/goal', {
    maxSpend: weeklySpend,
    weekCount: profile.rewardSchedule
  })
  dispatch({ type: types.SUBMIT_GOAL, payload: res.data })
}

// Fetch all goals
export const fetchGoals = () => async dispatch => {
  const res = await axios.get('/api/goals')
  dispatch({ type: types.FETCH_GOALS, payload: res.data })
}

// Fetch active goal
export const fetchActiveGoal = () => async dispatch => {
  const res = await axios.get('/api/active_goal')
  dispatch({ type: types.FETCH_ACTIVE_GOAL, payload: res.data })
}

// Fetch active week
export const fetchActiveWeek = () => async dispatch => {
  const res = await axios.get('/api/active_week')
  dispatch({ type: types.FETCH_ACTIVE_WEEK, payload: res.data })
}

// Add bad transaction to bad txn list
export const addBadTxn = txnId => async dispatch => {
  axios.patch('/api/goal/add_bad_txn', {
    txnId: txnId
  })
  dispatch({ type: types.ADD_BAD_TXN, payload: txnId })
}
