import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router";
import registerServiceWorker from './registerServiceWorker';
import history from '../src/utils/history';
import Home from '../src/components/Home/';
import Tools from '../src/components/Tools/index';
import SignIn from '../src/components/SignIn';
import App from '../src/components/App/index'
import { sessionService } from 'redux-react-session';

ReactDOM.render( 

<Router history={history}>

  <App>
        <Switch>
            <Route exact path="/"  RouteonEnter={sessionService.checkAuth} component={Home} />
            <Route path="/tools" RouteonEnter={sessionService.checkAuth} component={Tools} />
            <Route path="/signIn"  RouteonEnter={sessionService.checkAuth} component={SignIn} />
        </Switch>
  </App>
</Router>
, document.getElementById('root'));
registerServiceWorker();
