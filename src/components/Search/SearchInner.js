import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';




// src
import './Search.css';
import NoteBookDetail from '../Reuseable/NotebookDetail';
import NoteList from '../Reuseable/NoteList';
const SearchInner = ({onClickSearch ,onIdChange,props}) => (
<div>
   <Card className="Search-Div">
      <TextField
         className="Search-TextBox"
         id="Id"
         label="Enter Gist Id"
         onChange={onIdChange}
         margin="normal"/>
      <Button onClick={onClickSearch}   className="Search-Button" variant="outlined" color="primary">
      Search
      </Button>
   </Card>
  <NoteBookDetail props={props}></NoteBookDetail>
  <NoteList props={props}></NoteList>
   
</div>


  );
  
export default SearchInner


