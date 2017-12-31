import { FETCH_PROFILE, SUBMIT_INFLOW, DELETE_INFLOW, SUBMIT_OUTFLOW, DELETE_OUTFLOW, UPDATE_PROFILE } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {

        case FETCH_PROFILE: 
            return action.payload || false;

        case UPDATE_PROFILE:
            return action.payload;

        case SUBMIT_INFLOW: 
                return Object.assign({}, state, {
                net_income: state.net_income + action.payload.amount
            })
            

        case DELETE_INFLOW: 
            return Object.assign({}, state, {
                net_income: state.net_income - action.payload.amount
            })

        case SUBMIT_OUTFLOW: 
            return Object.assign({}, state, {
                net_income: state.net_income - action.payload.amount
            })

        case DELETE_OUTFLOW: 
            return Object.assign({}, state, {
                net_income: state.net_income + action.payload.amount
            })

        default: 
            return state;
    }
}