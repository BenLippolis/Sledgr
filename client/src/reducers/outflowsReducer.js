import { FETCH_OUTFLOWS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_OUTFLOWS: 
            return action.payload;
        default: 
            return state;
    }
}