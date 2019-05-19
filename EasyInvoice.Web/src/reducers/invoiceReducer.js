import * as types from '../actions/actionConstants';
import initialState from './initialState';

export default function invoiceReducer(state = initialState.invoice, action){
    switch(action.type){
        case types.CREATE_INVOICE:
            return Object.assign({}, action.invoice);
        
        default:
            return state;
    }
}