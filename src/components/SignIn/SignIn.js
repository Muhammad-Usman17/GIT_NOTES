// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr'

// src
import SignInInner from './SignInInner'
import { parseQueryString } from '../../utils'
import { login } from '../../redux/actions';

const GITHUB_URL = 'https://github.com/login/oauth/authorize'
const CLIENT_ID = '956b89a4af0e7392a865'

class SignIn extends Component {
  componentDidMount() {
    const { code, dispatch } = this.props
    if (code) {
      dispatch(login(code));
    }
  }

  handleClickSignIn = () => {
    window.location.href = `${GITHUB_URL}?client_id=${CLIENT_ID}&scope=user,gist`;
  }
  
  render() {
    return <SignInInner onClickSignIn={this.handleClickSignIn} />
  }
}

function mapStateToProps(state, ownProps) {
  const queryString = getOr('', 'location.search')(ownProps)
  const code = getOr('', 'code')(parseQueryString(queryString))

    return {
        code
    };
}

export default connect(mapStateToProps)(SignIn);