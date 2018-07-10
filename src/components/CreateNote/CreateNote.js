// libs
import React from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';

// src
import CreateNoteInner from './CreateNoteInner';
import { NoteOperation } from '../../redux/actions/notes';

class CreateNote extends React.Component {
  handleCreateNote = () => {
    const { dispatch, match, token } = this.props;
    const id = match.params.id;
    dispatch(NoteOperation(id, this.state.name, this.state.name, this.state.content, token));
  };

  handleChangeName = event => {
    const nameVal = event.target.value;
    this.setState(() => ({
      name: nameVal,
    }));
  };

  handleChangeContent = event => {
    const conVal = event.target.value;
    this.setState(() => ({
      content: conVal,
    }));
  };

  render() {
    return (
      <CreateNoteInner
        onClickCreate={this.handleCreateNote}
        onChangeName={this.handleChangeName}
        onChangeContent={this.handleChangeContent}
      />
    );
  }
}

function mapStateToProps(state) {
  const user = getOr('', 'session.user')(state);
  return { user };
}

export default connect(mapStateToProps)(CreateNote);
