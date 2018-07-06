import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect, Router, Route, Switch } from "react-router";
import registerServiceWorker from './registerServiceWorker';
import { sessionService } from 'redux-react-session';
import { Provider } from 'react-redux'; 


import history from '../src/utils/history';
import Search from '../src/components/Search';
import SignIn from '../src/components/SignIn';
import Home from '../src/components/Home';
import NoteBook from '../src/components/NoteBook';
import App from '../src/components/App'
import configureStore from '../src/redux/store/configureStore';

const store = configureStore();
sessionService.initSessionService(store, { driver: 'COOKIES' });
ReactDOM.render( 
<Provider store={store}>
<div>
<Router history={history}>
        <Switch>   
            <Route exact path="/" RouteonEnter={sessionService.checkAuth} component={SignIn} />
            <Route exact path="/search" RouteonEnter={sessionService.checkAuth} component={Search} />
            <Route  path="/dashboard"  RouteonEnter={sessionService.checkAuth} component={App} />
            <Redirect to="/" />
        </Switch>
</Router>
</div>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
