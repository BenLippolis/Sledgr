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