// libs
import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import getOr from 'lodash/fp/getOr'
import {
  sessionService
} from 'redux-react-session';

// src
import HomeInner from './HomeInner'
import history from '../../utils/history'
import {
  createGist,
  gistList,
  deleteGist
} from '../../redux/actions';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notebooks: [],
      user: {},
      copied: false,

    }

  }


  componentDidUpdate(prevProps) {

    if (this.props.user.username && this.props.user !== prevProps.user) {
      const {
        dispatch,
        user
      } = this.props
      const token = this.state.token;
      dispatch(gistList({
        token: token,
        username: user.username
      }));
    }


  }
  componentDidMount() {

    sessionService.loadSession().then((result) => {
      this.setState({
        token: result.tok
      });
    });
  }

  handleNotebookDetails = url =>()=> {
   history.replace(`/dashboard/notebook/`+url);
  }
  handleChangeName = event => {
    this.setState({
      name: event.target.value
    });
  }
  handleClickCopy = () => {
    this.setState({
      copied: true
    });



  }
  handleCopied = () => {
    this.setState({
      copied: false
    });



  }
  handleChangeDescription = event => {
    this.setState({
      description: event.target.value
    });
  }
  handleCreateGist = () => {
    const {
      dispatch,
      user
    } = this.props
    const token = this.state.token;

    dispatch(createGist({
      name: this.state.name,
      description: this.state.description,
      token: token
    }));

  }
  handleDeleteGist = (value,index) => () => {
  
    const {
      dispatch,
      user
    } = this.props
    const token = this.state.token;
 
    dispatch(deleteGist({
      gistid: value.id,
      token: token,
      index: index
    }));

  }


  render() {
    //console.log('prop',this.props)

    return <HomeInner handleDelete = {
      this.handleDeleteGist
    }
    handleChangeName = {
      this.handleChangeName
    }
    handleChangeDescription = {
      this.handleChangeDescription
    }
    onClickGist = {
      this.handleCreateGist
    }
    props = {
      this.props
    }
    state = {
      this.state
    }
    handleCopied = {
      this.handleCopied
    }
    handleClickCopy = {
      this.handleClickCopy
    }
    handleNotebookDetails = {
      this. handleNotebookDetails
    }
  
    />

  }

}



function mapStateToProps(state, ownProps) {

  const user = getOr('', 'session.user')(state)
  const authenticated = getOr('', 'session.authenticated')(state)
  const gist = getOr([], 'gists.notebooks')(state)
  const notebook = getOr({}, 'gists.gist')(state)
  const created = getOr(false, 'gists.created')(state)
  const deleted = getOr(false, 'gists.deleted')(state)
  console.log('state', state)
  return {
    user,
    authenticated,
    gist,
    created,
    deleted,
    notebook
  };

}


export default connect(mapStateToProps)(Home);
