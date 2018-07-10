// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr'
import { sessionService } from 'redux-react-session';

// src
import SearchInner from './SearchInner'
import { getSingleNotebook } from '../../redux/actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dialogName: '',
      orignalFileName: '',
      dailogContent: ''
    }
  }

  handleChangeId = event => {
    this.setState({
      id: event.target.value
    });
  }
  
  handleSearch = () => {
    sessionService.loadSession().then((result) => {
        return result.tok;
      })
      .then((response) => {
        this.setState({
          token: response
        });
        const {
          dispatch
        } = this.props
        const {
          id
        } = this.state;
        dispatch(getSingleNotebook(id, response));
      });
  }

  handleDum = () => {
   
  }

  render() {
    return <SearchInner onClickSearch = {
      this.handleSearch
    }
    props = {
      this.props
    }
    onIdChange = {
      this.handleChangeId
    }
    onDeleteNote = {
      this.handleDum
    }
    onUpdateNote = {
      this.handleDum
    }
    openUpdateDailog = {
      this.handleDum
    }
    closeUpdateDailog = {
      this.handleDum
    }
    handleChangeDailogContent = {
      this.handleDum
    }
    handleChangeDailogName = {
      this.handleDum
    }
    state = {
      this.state
    }
    />
  }
}



function mapStateToProps(state, ownProps) {

  const gist = getOr({}, 'notes.note.')(state)
  const description = getOr('', 'notes.note.description')(state)
  const owner = getOr('', 'notes.note.owner.login')(state)
  const lastUpdated = getOr('', 'notes.note.updated_at')(state)
  const note = getOr({}, 'notes.note.files')(state)
  const notes = note == {} ? [] : Object.values(note);

  return {
    gist,
    description,
    owner,
    lastUpdated,
    notes,
    note
  };
}
export default connect(mapStateToProps)(Search);