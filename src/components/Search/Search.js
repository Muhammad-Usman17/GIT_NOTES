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
    const { authenticated } = this.props;
    if (authenticated) {
      sessionService.loadSession().then(result => result.tok).then(response => {
        this.setState({
          token: response,
        });
        const { dispatch } = this.props;
        const { id } = this.state;
        console.log('iamcalled');
        console.log(id);
        console.log(response);
        dispatch(getSingleNotebook(id, response));
      });
    } else {
      const { dispatch } = this.props;
      const { id } = this.state;
      dispatch(getSingleNotebook(id, ''));
    }
  };
  handleSignOut = () => {
    const { dispatch } = this.props;
    dispatch(logout());
  };

  handleDum = () => {};

  render() {
    const { id } = this.state;
    const { Notebook, dispatch, user, authenticated, isLoading } = this.props;
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
        isLoading={isLoading}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const Notebook = getOr('', 'notes.mainReducer')(state);
  const user = getOr('', 'session.user')(state);
  const authenticated = getOr('', 'session.authenticated')(state);
  const isLoading = getOr(false, 'notes.isLoading')(state);

  return {
    Notebook,
    user,
    authenticated,
    isLoading,
  };
}
export default connect(mapStateToProps)(Search);
