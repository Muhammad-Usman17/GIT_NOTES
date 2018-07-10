// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';
import { sessionService } from 'redux-react-session';

// src
import HomeInner from './HomeInner';
import { NotebookList } from '../../redux/actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.user.username && this.props.user !== prevProps.user) {
      const { dispatch, user } = this.props;
      const { token } = this.state;
      dispatch(NotebookList(user.username, token));
    }
  }

  componentDidMount() {
    sessionService.loadSession().then(result => {
      this.setState({
        token: result.tok,
      });
    });
  }

  render() {
    const { token } = this.state;
    const { notebooks, dispatch } = this.props;

    return (
      <HomeInner
        {...this.props}
        {...this.state}
        token={token}
        notebook={notebooks}
        dispatch={dispatch}
      />
    );
  }
}

function mapStateToProps(state) {
  const user = getOr('', 'session.user')(state);
  const authenticated = getOr('', 'session.authenticated')(state);
  const notebooks = getOr([], 'notebooks.notebooks')(state);
  const created = getOr(false, 'notebooks.created')(state);
  const deleted = getOr(false, 'notebooks.deleted')(state);

  return {
    user,
    authenticated,
    notebooks,
    created,
    deleted,
  };
}
export default connect(mapStateToProps)(Home);
