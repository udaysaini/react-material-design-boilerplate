import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './styles/index.css';
import 'font-awesome/css/font-awesome.css';

import routes from './routes';


injectTapEventPlugin();
// call it before the render method to allow OnTouchTap which is a faster version of OnClick
// until v1 Material-UI

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router routes={routes} history={browserHistory} />
    </Provider>
    , document.getElementById('root')
);
