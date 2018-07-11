// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';
import { sessionService } from 'redux-react-session';

// src
import SearchInner from './SearchInner';
import { getSingleNotebook, logout } from '../../redux/actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dialogName: '',
      orignalFileName: '',
      dailogContent: '',
      id: '',
    };
  }

  handleChangeId = event => {
    const idVal = event.target.value;
    this.setState({
      id: idVal,
    });
  };

  handleSearch = () => {
    sessionService.loadSession().then(result => result.tok).then(response => {
      this.setState({
        token: response,
      });
      const { dispatch } = this.props;
      const { id } = this.state;
      dispatch(getSingleNotebook(id, response));
    });
  };
  handleSignOut = () => {
    const { dispatch } = this.props;
    dispatch(logout());
  };

  handleDum = () => {};

  render() {
    const { id } = this.state;
    const { Notebook, dispatch, user, authenticated } = this.props;
    const notebook = Notebook[id];
    const description = getOr('', 'description')(notebook);
    const owner = getOr('', 'login')(notebook);
    const lastUpdated = getOr('', 'updated_at')(notebook);
    const note = getOr({}, 'files')(notebook);
    const notes = note == {} ? [] : Object.values(note);

    return (
      <SearchInner
        onClickSearch={this.handleSearch}
        onChangeId={this.handleChangeId}
        noteBookId={id}
        token={''}
        dispatch={dispatch}
        owner={owner}
        description={description}
        lastUpdated={lastUpdated}
        note={note}
        notes={notes}
        onClickSignout={this.handleSignOut}
        user={user}
        authenticated={authenticated}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const Notebook = getOr('', 'notes')(state);
  const user = getOr('', 'session.user')(state);
  const authenticated = getOr('', 'session.authenticated')(state);

  return {
    Notebook,
    user,
    authenticated,
  };
}
export default connect(mapStateToProps)(Search);
