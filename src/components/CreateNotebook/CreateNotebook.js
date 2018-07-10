// libs
import React from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';

// src
import CreateNotebookInner from './CreateNotebookInner';
import { createNoteBooks } from '../../redux/actions';

class CreateNotebook extends React.Component {
  state = { name: '', description: '' };

  handleCreateNotebook = () => {
    const { dispatch, user, token } = this.props;
    const { description, name } = this.state;
    dispatch(createNoteBooks(description, name, token));
  };

  handleChangeName = event => {
    const nameVal = event.target.value;

    this.setState(() => ({
      name: nameVal,
    }));
  };

  handleChangeDescription = event => {
    const desVal = event.target.value;
    this.setState(() => ({
      description: desVal,
    }));
  };

  render() {
    return (
      <CreateNotebookInner
        onClickCreate={this.handleCreateNotebook}
        onChangeName={this.handleChangeName}
        onChangeDescription={this.handleChangeDescription}
      />
    );
  }
}

function mapStateToProps(state) {
  const user = getOr('', 'session.user')(state);

  return { user };
}

export default connect(mapStateToProps)(CreateNotebook);
