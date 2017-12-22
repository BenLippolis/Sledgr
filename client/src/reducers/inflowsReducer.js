import { FETCH_INFLOWS, DELETE_INFLOW } from '../actions/types';
import _ from 'lodash';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_INFLOWS: 
            return action.payload;
        default: 
            return state;

        // Delete inflow from local state
        case DELETE_INFLOW:
            return _.omit(state, action.payload);
    }
}