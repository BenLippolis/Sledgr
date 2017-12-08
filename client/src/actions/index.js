import axios from 'axios';
import { FETCH_USER } from './types';

// Fetch User action creator returns a function 
// Redux thunk will inspect the value returned by this AC
// If we return a function, Reduc Thunk will call the function
// And pass in dispatch as an argument 
export const fetchUser = () => async dispatch => {   
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data }); 
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
    // We pass the history object to the action creator using the onClick callback
    // In the component to access react router for redirection after survey creation
    history.push('/');
    dispatch({ type: FETCH_USER, payload: res.data });
};