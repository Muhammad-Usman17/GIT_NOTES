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
    const { dispatch, match, owner, description, lastUpdated, note, notes } = this.props;
    const { noteBookId } = match.params;
    return (
      <NoteInner
        token={token}
        dispatch={dispatch}
        noteBookId={noteBookId}
        owner={owner}
        description={description}
        lastUpdated={lastUpdated}
        note={note}
        notes={notes}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const description = getOr('', 'notes.note.description')(state);
  const owner = getOr('', 'notes.note.owner.login')(state);
  const lastUpdated = getOr('', 'notes.note.updated_at')(state);
  const note = getOr({}, 'notes.note.files')(state);
  const notes = note == {} ? [] : Object.values(note);

  return {
    description,
    owner,
    lastUpdated,
    notes,
    note,
  };
}
export default connect(mapStateToProps)(Note);
