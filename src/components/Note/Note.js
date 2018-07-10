// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';
import { sessionService } from 'redux-react-session';

// src
import NoteInner from './NoteInner';
import { NoteOperation, getSingleNotebook } from '../../redux/actions';

class Note extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
      gistId: '',
    };
  }

  handleChangeName = event => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChangeContent = event => {
    this.setState({
      content: event.target.value,
    });
  };

  handleChangeDailogName = event => {
    this.setState({
      dialogName: event.target.value,
    });
  };

  handleChangeDailogContent = event => {
    this.setState({
      dailogContent: event.target.value,
    });
  };

  handleCreateNote = () => {
    console.log('create called');
    const { dispatch, user } = this.props;
    const token = this.state.token;
    const id = this.props.match.params.id;
    dispatch(NoteOperation(id, this.state.name, this.state.name, this.state.content, token));
  };

  handleDeleteNote = name => {
    console.log('delete called');
    const { dispatch, user } = this.props;
    const token = this.state.token;
    const id = this.props.match.params.id;
    dispatch(
      NoteOperation(id, {
        name,
        content: '',
        filename: name,
        token,
      })
    );
  };

  handleUpdate = (name, content) => {
    console.log('i am called');
    this.setState({
      dialogName: name,
    });
    this.setState({
      orignalFileName: name,
    });
    this.setState({
      dailogContent: content,
    });
    this.setState({
      open: true,
    });
  };

  handleUpdateNote = oldFileName => {
    console.log('update called');
    const { dispatch, user } = this.props;
    const token = this.state.token;
    const id = this.props.match.params.id;
    dispatch(
      NoteOperation(id, oldFileName, this.state.dialogName, this.state.dailogContent, token)
    );
    this.setState({
      open: false,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  componentDidMount() {
    sessionService.loadSession().then(result => result.tok).then(response => {
      this.setState({
        token: response,
      });
      const { dispatch } = this.props;

      const id = this.props.match.params.id;

      dispatch(getSingleNotebook(id, response));
    });
  }
  render() {
    return (
      <NoteInner
        handleChangeContent={this.handleChangeContent}
        handleChangeName={this.handleChangeName}
        onCreateNote={this.handleCreateNote}
        onDeleteNote={this.handleDeleteNote}
        onUpdateNote={this.handleUpdateNote}
        openUpdateDailog={this.handleUpdate}
        closeUpdateDailog={this.handleClose}
        handleChangeDailogContent={this.handleChangeDailogContent}
        handleChangeDailogName={this.handleChangeDailogName}
        state={this.state}
        props={this.props}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const gist = getOr({}, 'notes.note')(state);
  const description = getOr('', 'notes.note.description')(state);
  const owner = getOr('', 'notes.note.owner.login')(state);
  const lastUpdated = getOr('', 'notes.note.updated_at')(state);
  const note = getOr({}, 'notes.note.files')(state);
  const notes = note == {} ? [] : Object.values(note);
  return {
    gist,
    description,
    owner,
    lastUpdated,
    notes,
    note,
  };
}
export default connect(mapStateToProps)(Note);
