import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return (
            <div className="jumbotron">
                <h1>EasyInvoicer</h1>
                <Link to="create" className="btn btn-primary btn-lg">
                Create new Invoice</Link>
            </div>
        );
    }
}

export default HomePage;