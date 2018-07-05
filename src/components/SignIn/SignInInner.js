// libs
import React from 'react'
import Button from '@material-ui/core/Button';

// src


const SignInInner = ({ onClickSignIn }) => (
    <div>
        <Button onClick={onClickSignIn}>SignIn with Github</Button>
     </div>
)

export default SignInInner