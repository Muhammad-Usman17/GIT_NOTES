// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';
import { sessionService } from 'redux-react-session';

// src
import SearchInner from './SearchInner';
import { getSingleNotebook } from '../../redux/actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dialogName: '',
      orignalFileName: '',
      dailogContent: '',
    };
  }

  handleChangeId = event => {
    this.setState({
      id: event.target.value,
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

  handleDum = () => {};

  render() {
    const { dispatch, owner, description, lastUpdated, note, notes } = this.props;
    const { id } = this.setState;
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
export default connect(mapStateToProps)(Search);
