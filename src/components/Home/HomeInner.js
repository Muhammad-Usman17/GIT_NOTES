import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const HomeInnner = ({ handleChangeName,handleChangeDescription ,onClickGist, user, authenticated }) => (
    <div>
      
     
      <TextField
          id="name"
          label="Gist name"
          onChange={handleChangeName}
          margin="normal"
        />
         <TextField
          id="description"
          label="Description"
          onChange={handleChangeDescription}
          margin="normal"
        />
      <Button onClick={onClickGist}>
        Create Gist
      </Button>
    </div>
  );
  
export default HomeInnner


