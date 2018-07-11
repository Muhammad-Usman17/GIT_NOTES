//  libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';
import { sessionService } from 'redux-react-session';

//  src
import AppInner from './AppInner';
import { logout } from '../../redux/actions';
import history from '../../utils/history';

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { authenticated } = nextProps;
    sessionService.loadSession().then(result => {
      this.setState({
        token: result.tok,
      });
    });
    if (!authenticated) {
      history.replace('/');
    }
  }

  handleSignOut = () => {
    const { dispatch } = this.props;
    dispatch(logout());
  };
  render() {
    const { match, user, authenticated } = this.props;
    const path = getOr('/dashboard', 'path')(match);
    return (
      <AppInner
        path={path}
        onClickSignout={this.handleSignOut}
        user={user}
        authenticated={authenticated}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const user = getOr('', 'session.user')(state);
  const authenticated = getOr('', 'session.authenticated')(state);
  return {
    user,
    authenticated,
  };
}

export default connect(mapStateToProps)(App);
