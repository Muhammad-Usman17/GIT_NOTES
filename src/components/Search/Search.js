// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr'
import { sessionService } from 'redux-react-session';

// src
import SearchInner from './SearchInner'
import { getSingleGist } from '../../redux/actions';


class Search extends Component {

  handleChangeId = event => {
    this.setState({
      id: event.target.value
    });
  }
  handleSearch = () => {
    const {
      dispatch
    } = this.props
    dispatch(getSingleGist(this.state.id));
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
    />
  }
}



function mapStateToProps(state, ownProps) {
 
  const gist = getOr({}, 'search.single_gist')(state)
  const description=getOr('', 'search.single_gist.description')(state)
  const owner=getOr('', 'search.single_gist.owner.login')(state)
  const lastUpdated=getOr('', 'search.single_gist.updated_at')(state)
  const note=getOr({}, 'search.single_gist.files')(state)
  const notes = note=={}?[]: Object.values(note);

  return {
    gist,description,owner,lastUpdated,notes,note
  };
}
export default connect(mapStateToProps)(Search);