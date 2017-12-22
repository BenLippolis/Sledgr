import { FETCH_INFLOWS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_INFLOWS: 
            return action.payload;
        default: 
            return state;
    }
}