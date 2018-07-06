// libs
import React,{Component} from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr'
import { sessionService } from 'redux-react-session';



// src
import AppInner from './AppInner'
import { logout } from '../../redux/actions';
import history from '../../utils/history';





 class App extends Component{
  constructor()
  {super();
   this.state = {
     token: ''
   }
   
  }
 
  componentWillReceiveProps(nextProps)
  {
     
    const {authenticated} = nextProps
      
        sessionService.loadSession().then((result) => {
          return result.tok;
       })
       .then((response) => {
          this.setState({ token:response});
       });
      
       if(!authenticated)
       {
        history.replace('/')
       }
      }
       
      
        handleClickSignOut = () => {
          const {
            dispatch
          } = this.props
          dispatch(logout());
          
        }
render(){
  
 
    return <AppInner props={this.props}onClickSignout = { this.handleClickSignOut  }  user={this.props.user}  authenticated={this.props.authenticated} />

   
  
 
}
}


function mapStateToProps(state, ownProps) {
 
  
    const user = getOr('', 'session.user')(state)
    const authenticated = getOr('', 'session.authenticated')(state)
  
    return {
      user,
      authenticated
    };
  }
  
  
  export default connect(mapStateToProps)(App);


