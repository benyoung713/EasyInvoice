import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CreateInvoicePage from './components/create/CreateInvoicePage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="create" component={CreateInvoicePage}/>
    </Route>
);
