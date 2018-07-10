// libs
import React from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';

// src
import NoteItemInner from './NoteItemInner';
import { NoteOperation } from '../../redux/actions';
import UpdateNote from '../UpdateNote';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }
  handleChangeName = event => {
    this.setState({
      dialogName: event.target.value,
    });
  };

  handleChangeContent = event => {
    this.setState({
      dailogContent: event.target.value,
    });
  };

  handleDeleteNote = name => {
    const { dispatch, match, token } = this.props;
    const id = match.params.id;
    dispatch(NoteOperation(id, name, name, '', token));
  };

  handleDialogOpen = (name, content) => {
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
      isOpened: true,
    });
  };

  handleUpdateNote = oldFileName => {
    const { dispatch, match, token } = this.props;
    const id = match.params.id;
    dispatch(
      NoteOperation(id, oldFileName, this.state.dialogName, this.state.dailogContent, token)
    );
    this.setState({
      isOpened: false,
    });
  };

  handleDialogClose = () => {
    this.setState({
      isOpened: false,
    });
  };

  render() {
    const { value, index } = this.props;
    const { filename, language, type, content } = value;
    const { isOpened, orignalFileName, dialogName, dailogContent } = this.state;
    return (
      <div>
        <NoteItemInner
          filename={filename}
          language={language}
          type={type}
          content={content}
          index={index}
          classStyle={''}
          onClickDelete={this.handleDeleteNote}
          onClickUpdate={this.handleDialogOpen}
        />
        <UpdateNote
          isOpened={isOpened}
          orignalFileName={orignalFileName}
          dialogName={dialogName}
          dailogContent={dailogContent}
          onClickCancel={this.handleDialogClose}
          onClickSave={this.handleUpdateNote}
          handleChangeName={this.handleChangeName}
          handleChangeContent={this.handleChangeContent}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const user = getOr('', 'session.user')(state);

  return { user };
}

export default connect(mapStateToProps)(NoteItem);