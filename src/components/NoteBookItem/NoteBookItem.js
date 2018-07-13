// libs
import React from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';

// src
import NoteBookItemInner from './NoteBookItemInner';
import { deleteNoteBook } from '../../redux/actions';
import history from '../../utils/history';

class NoteBookItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isCopied: false,
    };
  }
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

  handleCopyUrl = () => {
    this.setState({
      isCopied: true,
    });
  };
  handleCloseSnakbar = () => {
    this.setState({
      isCopied: false,
    });
  };

  render() {
    const { value, index } = this.props;
    const { isCopied } = this.state;
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
        onClickCopy={this.handleCopyUrl}
        onCloseSnakbar={this.handleCloseSnakbar}
        isCopied={isCopied}
      />
    );
  }
}

function mapStateToProps(state) {
  const user = getOr('', 'session.user')(state);

  return { user };
}

export default connect(mapStateToProps)(NoteBookItem);
