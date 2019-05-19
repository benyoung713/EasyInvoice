import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as invoiceActions from '../../actions/invoiceActions';
import {bindActionCreators} from 'redux';

class CreateInvoicePage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            invoice: { companyName: "",
                       companyAddress: {LineOne:"",
                                        LineTwo: "",
                                        City: "",
                                        Postcode: ""},
                       customerAddress: {LineOne:"",
                                        LineTwo: "",
                                        City: "",
                                        Postcode: ""}
                        
            }
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    
    onNameChange(event){
        const invoice = this.state.invoice;
        invoice.companyName = event.target.value;
        this.setState({invoice: invoice});
    }

    onClickSave(){
        this.props.actions.createInvoice(this.state.invoice);
    }

    render(){
        return (
            <div>
                <h1>Create Invoice</h1>
                <input
                    type="text"
                    onChange={this.onNameChange}
                    value={this.state.invoice.name}/>
                
                <input type="submit"
                        value="Save"
                        onClick={this.onClickSave}/>
            </div>
        );
    }
}

CreateInvoicePage.propTypes = {
    invoice: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return{
        invoice: state.invoice
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(invoiceActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateInvoicePage);