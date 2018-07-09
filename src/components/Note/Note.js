// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr'
import { sessionService } from 'redux-react-session';

// src
import NoteInner from './NoteInner'
import { NoteOperation,getSingleGist } from '../../redux/actions';


class Note extends Component {
 constructor()
 {super();
  this.state = {
    token: '',
    gistId:''
  }
  
 }
 handleChangeName = event => {
  this.setState({
    name: event.target.value
  });
}
 handleChangeContent = event => {
  this.setState({
    content: event.target.value
  });
}
handleCreateNote = () => {
  const {
    dispatch,
    user
  } = this.props
  const token = this.state.token;
  const id= this.props.match.params.id
  dispatch(NoteOperation(id,{
    name: this.state.name,
    content:this.state.content,
    filename:this.state.name,
    token: token
  }));

}
 componentDidMount(){

  sessionService.loadSession().then((result) => {
     return result.tok;
  })
  .then((response) => {
     this.setState({ token:response});
  });
 const id= this.props.match.params.id
 const {
  dispatch
} = this.props
dispatch(getSingleGist(id));
}
 


  
  newMethod() {
    return this;
  }

  render() {
    return <NoteInner handleChangeContent={this.handleChangeContent }handleChangeName={this.handleChangeName} onCreateNote={this.handleCreateNote}  props={this.props} 
    />
  }
}



function mapStateToProps(state, ownProps) {
 
  const gist = getOr({}, 'notes.note')(state)
  const description=getOr('', 'notes.note.description')(state)
  const owner=getOr('', 'notes.note.owner.login')(state)
  const lastUpdated=getOr('', 'notes.note.updated_at')(state)
  const note=getOr({}, 'notes.note.files')(state)
  const notes = note=={}?[]: Object.values(note);

  return {
    gist,description,owner,lastUpdated,notes,note
  };
}


export default connect(mapStateToProps)(Note);