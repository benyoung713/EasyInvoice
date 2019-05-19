import * as types from './actionConstants';
export function createInvoice(invoice){
    return {type: types.CREATE_INVOICE, invoice};
}