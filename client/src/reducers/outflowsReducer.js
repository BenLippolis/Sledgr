import { FETCH_OUTFLOWS, SUBMIT_OUTFLOW, DELETE_OUTFLOW } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_OUTFLOWS: 
            return action.payload;

        case SUBMIT_OUTFLOW: 
        return [
            ...state,
            {
                title: action.payload.title,
                amount: action.payload.amount,
                _id: action.payload._id
            }
        ];

    case DELETE_OUTFLOW:
        const newState = Object.assign([], state);
        const indexOfOutflowToDelete = state.findIndex(outflow => {
            return outflow.id == action.payload
        })
        newState.splice(indexOfOutflowToDelete, 1);
        return newState;
        
    default: 
        return state;
    }
}