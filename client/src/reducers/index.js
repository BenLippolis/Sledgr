import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
import profilesReducer from './profilesReducer';
import inflowsReducer from './inflowsReducer';
import outflowsReducer from './outflowsReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,  
    surveys: surveysReducer,
    profiles: profilesReducer,
    inflows: inflowsReducer,
    outflows: outflowsReducer
});