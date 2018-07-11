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
    const { user, authenticated, dispatch } = this.props;
    if (user.username && user !== prevProps.user) {
      const { token } = this.state;
      dispatch(NotebookList(user.username, token));
    }
  }

  componentDidMount() {
    sessionService.loadSession().then(result => {
      this.setState({
        token: result.tok,
      });
      const { user, authenticated, dispatch } = this.props;
      if (user.username && user) {
        const { token } = this.state;
        dispatch(NotebookList(user.username, token));
      }
    });
  }

  render() {
    const { token } = this.state;
    const { notebooks, dispatch, isLoading } = this.props;

    return (
      <HomeInner token={token} notebooks={notebooks} dispatch={dispatch} isLoading={isLoading} />
    );
  }
}

function mapStateToProps(state) {
  const user = getOr('', 'session.user')(state);
  const authenticated = getOr('', 'session.authenticated')(state);
  const notebooks = getOr([], 'notebooks.mainReducer.notebooks')(state);
  const isLoading = getOr(false, 'notebooks.isLoading')(state);
  const created = getOr(false, 'notebooks.mainReducer.created')(state);
  const deleted = getOr(false, 'notebooks.mainReducer.deleted')(state);

  return {
    user,
    authenticated,
    notebooks,
    created,
    deleted,
    isLoading,
  };
}
export default connect(mapStateToProps)(Home);
