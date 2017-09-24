import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';

//PAGE Components
import DatatablePage from './containers/DatatablePage';
import FormPage from './containers/FormPage';
import LoginPage from './containers/LoginPage';
import NotFoundPage from './containers/NotFoundPage';
import ReduxForm from './containers/reduxForms/ReduxForm';

export default (
    <Route>
        <Route path="login" component={LoginPage}/>
        <Route path="/" component={App}>
            <IndexRoute component={LoginPage} />
            <Route path="/table" component={DatatablePage} />
            <Route path='/form' component={FormPage} />
            <Route path='/reduxform' component={ReduxForm} />
        </Route>
        <Route path='*' component={NotFoundPage}/>
    </Route>
)