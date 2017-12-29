import { FETCH_PROFILE, SUBMIT_INFLOW, DELETE_INFLOW, SUBMIT_OUTFLOW, DELETE_OUTFLOW } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {

        case FETCH_PROFILE: 
            return action.payload;

        case SUBMIT_INFLOW: 
            return state.map((profile) => {
                if (profile._user === action.payload._user) {
                  return Object.assign({}, profile, {
                    net_income: profile.net_income + action.payload.amount
                })
            }})

        case DELETE_INFLOW: 
            return state.map((profile) => {
                if (profile._user === action.payload._user) {
                return Object.assign({}, profile, {
                    net_income: profile.net_income - action.payload.amount
                })
            }})

        case SUBMIT_OUTFLOW: 
            return state.map((profile) => {
                if (profile._user === action.payload._user) {
                    return Object.assign({}, profile, {
                    net_income: profile.net_income - action.payload.amount
                })
            }})

        case DELETE_OUTFLOW: 
            return state.map((profile) => {
                if (profile._user === action.payload._user) {
                return Object.assign({}, profile, {
                    net_income: profile.net_income + action.payload.amount
                })
            }})

        default: 
            return state;
    }
}