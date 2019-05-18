import React, {PropTypes} from 'react';

const AddressInput = ({invoice, type, name, label, onChange, value, error}) =>{
    return(
        <div className={name}>
            <label htmlFor={name}>{label}</label>
            <div name={name}>
                <input
                    type="text"
                    placeholder="Address Line 1"
                    value={invoice[type].LineOne}
                    onChange={onChange}/>
                <input
                    type="text"
                    placeholder="Address Line 2"
                    value={invoice[type].LineTwo}
                    onChange={onChange}/>
                <input
                    type="text"
                    placeholder="Town/City"
                    value={invoice[type].City}
                    onChange={onChange}/>
                <input
                    type="text"
                    placeholder="Postcode"
                    value={invoice[type].Postcode}
                    onChange={onChange}/>
            </div>
        </div>
    );
};

AddressInput.propTypes ={
    name: PropTypes.string.isRequired,
    invoice: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default AddressInput;