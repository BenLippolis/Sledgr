import * as types from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {

        case types.FETCH_PROFILE: 
            return action.payload || false;

        case types.UPDATE_PROFILE:
            return action.payload;

        case types.SUBMIT_INFLOW: 
            return {
                ...state,
                max_savings: state.max_savings + action.payload.amount,
                target_savings: state.target_savings + (action.payload.amount * .8),
                monthly_spend: state.monthly_spend + (action.payload.amount * .2)
            }
            

        case types.DELETE_INFLOW: 
            return {
                ...state,
                max_savings: state.max_savings - action.payload.amount,
                target_savings: state.target_savings - (action.payload.amount * .8),
                monthly_spend: state.monthly_spend - (action.payload.amount * .2)
            }

        case types.SUBMIT_OUTFLOW: 
            return { 
                ...state,
                max_savings: state.max_savings - action.payload.amount,
                target_savings: state.target_savings - (action.payload.amount * .8),
                monthly_spend: state.monthly_spend - (action.payload.amount * .2)
            }

        case types.DELETE_OUTFLOW: 
            return {
                ...state,
                max_savings: state.max_savings + action.payload.amount,
                target_savings: state.target_savings + (action.payload.amount * .8),
                monthly_spend: state.monthly_spend + (action.payload.amount * .2)
            }

        case types.UPDATE_REWARD_SCHEDULE:
            return {
                ...state, 
                reward_schedule: action.payload
            }
            
        default: 
            return state;
    }
}