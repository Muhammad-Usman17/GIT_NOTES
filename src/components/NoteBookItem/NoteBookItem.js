// libs
import React from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';

// src
import NoteBookItemInner from './NoteBookItemInner';
import { deleteNoteBook } from '../../redux/actions';
import history from '../../utils/history';

class NoteBookItem extends React.Component {
  handleDeleteNoteBook = () => {
    const { index, value, token, dispatch } = this.props;
    const { id } = value;
    dispatch(deleteNoteBook(id, token, index));
  };
  handleNotebookDetails = () => {
    const { value } = this.props;
    const { id } = value;
    history.replace(`/dashboard/notebook/${id}`);
  };

  render() {
    const { value, index } = this.props;
    const { id, description, files, html_url: htmlUrl } = value;
    return (
      <NoteBookItemInner
        id={id}
        description={description}
        files={files}
        index={index}
        htmlUrl={htmlUrl}
        onClickDelete={this.handleDeleteNoteBook}
        onClickItem={this.handleNotebookDetails}
      />
    );
  }
}

function mapStateToProps(state) {
  const user = getOr('', 'session.user')(state);

  return { user };
}

export default connect(mapStateToProps)(NoteBookItem);
