import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const CreateInvoiceForm = ({invoice, onSave, onChange}) =>{
    return(
        <div>
        <TextInput
            name="companyName"
            label="Company Name"
            value={invoice.companyName}
            onChange={onChange}/>

        <TextInput
            name="companyAddress"
            value={invoice.companyAddress}
            onChange={onChange}/>
        </div>
    );
};