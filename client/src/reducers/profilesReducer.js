import { FETCH_PROFILE, SUBMIT_INFLOW, DELETE_INFLOW, SUBMIT_OUTFLOW, DELETE_OUTFLOW } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {

        case FETCH_PROFILE: 
            return action.payload;

        case SUBMIT_INFLOW: 
            const indexOfProfileToUpdate = state.findIndex(profile => {
                return profile._user == action.payload._user
            })
            return state.map((profile, index) => {
                if (index === indexOfProfileToUpdate) {
                  return Object.assign({}, profile, {
                    net_income: profile.net_income + action.payload.amount
                })
            }})

        case DELETE_INFLOW: 
            const ProfileToUpdate = state.findIndex(profile => {
                return profile._user == action.payload._user
            })
            return state.map((profile, index) => {
                if (index === ProfileToUpdate) {
                return Object.assign({}, profile, {
                    net_income: profile.net_income - action.payload.amount
                })
            }})

        case SUBMIT_OUTFLOW: 
            const ProfToUpdate = state.findIndex(profile => {
                return profile._user == action.payload._user
            })
            return state.map((profile, index) => {
                if (index === ProfToUpdate) {
                    return Object.assign({}, profile, {
                    net_income: profile.net_income - action.payload.amount
                })
            }})

        case DELETE_OUTFLOW: 
            const ProToUpdate = state.findIndex(profile => {
                return profile._user == action.payload._user
            })
            return state.map((profile, index) => {
                if (index === ProToUpdate) {
                return Object.assign({}, profile, {
                    net_income: profile.net_income + action.payload.amount
                })
            }})

        default: 
            return state;
    }
}