// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr'
import { sessionService } from 'redux-react-session';

// src
import HomeInner from './HomeInner'
import { createGist,gistOk,gistList } from '../../redux/actions';
import history from '../../utils/history'
import { access } from 'fs';

class Home extends Component {
 constructor(props)
 {super(props);
  this.state = {
    token: ''
  }
  
 }
 componentWillReceiveProps()
 {  const token=this.state.token;
  const {
    dispatch,user
  } = this.props
 dispatch(gistList({token:token, username:user.username}));
console.log(this.props)

 }
 componentDidMount(){

  sessionService.loadSession().then((result) => {
   
     this.setState({ token:result.tok});
  });

}
 
handleChangeName = event => {
  this.setState({ name: event.target.value });
};
handleChangeDescription = event => {
  this.setState({ description: event.target.value });
};



  handleCreateGist = () => {
    const {
      dispatch,user
    } = this.props
    const token=this.state.token;
    
    dispatch(createGist({name:this.state.name,description:this.state.description,token:token,username:user.username}));
 
  }



  render() {
    return <HomeInner handleChangeName = { this.handleChangeName  } handleChangeDescription ={this.handleChangeDescription} onClickGist= { this.handleCreateGist  }  props={this.props} 
    />
  }
}



function mapStateToProps(state, ownProps) {
 
  
  const user = getOr('', 'session.user')(state)
  const authenticated = getOr('', 'session.authenticated')(state)
  const gist=getOr([], 'gists.gists')(state)
  const created=getOr([], 'gists.created')(state)
  console.log(gist)
  console.log(user)
  return {
    user,
    authenticated,
    gist,
    created
  };
}


export default connect(mapStateToProps)(Home);