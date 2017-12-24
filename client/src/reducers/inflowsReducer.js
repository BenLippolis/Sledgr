import { FETCH_INFLOWS, DELETE_INFLOW, SUBMIT_INFLOW } from '../actions/types';
import _ from 'lodash';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_INFLOWS: 
            return action.payload;

        case SUBMIT_INFLOW: 
            return [
                ...state,
                {
                    title: action.payload.title,
                    amount: action.payload.amount,
                    _id: action.payload._id
                }
            ];

        case DELETE_INFLOW:
            const newState = Object.assign([], state);
            const indexOfInflowToDelete = state.findIndex(inflow => {
                return inflow.id == action.payload
            })
            newState.splice(indexOfInflowToDelete, 1);
            return newState;
            
        default: 
            return state;
    }
}