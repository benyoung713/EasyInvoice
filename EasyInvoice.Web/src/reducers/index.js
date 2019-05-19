import {combineReducers} from 'redux';
import invoice from './invoiceReducer';

const rootReducer = combineReducers({
    invoice
});

export default rootReducer;