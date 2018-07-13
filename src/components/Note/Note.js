// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';
import { sessionService } from 'redux-react-session';

// src
import NoteInner from './NoteInner';
import { getSingleNotebook } from '../../redux/actions';

class Note extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
      gistId: '',
    };
  }

  componentDidMount() {
    sessionService.loadSession().then(result => result.tok).then(response => {
      this.setState({
        token: response,
      });
      const { dispatch, match } = this.props;

      const id = match.params.id;

      dispatch(getSingleNotebook(id, response));
    });
  }
  render() {
    const { token } = this.state;
    const { dispatch, match, owner, description, lastUpdated, note, notes, isLoading } = this.props;
    const { id } = match.params;
    return (
      <NoteInner
        token={token}
        dispatch={dispatch}
        noteBookId={id}
        owner={owner.login}
        description={description}
        lastUpdated={lastUpdated}
        note={note}
        notes={notes}
        isLoading={isLoading}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { match } = ownProps;
  const { id } = match.params;

  const Notebook = state.notes.mainReducer[id];
  const description = getOr('', 'description')(Notebook);
  const owner = getOr('', 'login')(Notebook);
  const lastUpdated = getOr('', 'updated_at')(Notebook);
  const note = getOr({}, 'files')(Notebook);
  const notes = note == {} ? [] : Object.values(note);
  const isLoading = getOr(false, 'notes.isLoading')(state);

  return {
    description,
    owner,
    lastUpdated,
    notes,
    note,
    isLoading,
  };
}
export default connect(mapStateToProps)(Note);
