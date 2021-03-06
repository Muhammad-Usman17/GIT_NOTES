import React from 'react'
import Button from '@material-ui/core/Button';

const NoteBookInner = ({ onClickSignout ,onClickGist, user, authenticated }) => (
    <div>
      <h3>Welcome it is notebook{user.name}</h3>
      <img src={user.photo}></img>
      <h5>{authenticated ? 'You are authenticated :)' : 'Error'}</h5>
      <Button onClick={onClickSignout}>
        SignOut
      </Button>
      <Button onClick={onClickGist}>
        SignOut
      </Button>
    </div>
  );
  
export default NoteBookInner


