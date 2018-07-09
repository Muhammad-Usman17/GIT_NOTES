//lib
import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';



// src

import NoteBookDetail from '../Reuseable/NotebookDetail';
import NoteList from '../Reuseable/NoteList';
import './Note.css';

const NoteInnner = ({ handleChangeContent,handleChangeName,props ,onCreateNote}) => (
    <div>
       <Card className="Note-Card">
      <CardHeader className="Note-Card-Header"
         title="Create Notebook" />
      <CardContent className="Note-CreateDiv">
         <TextField
            id="name"
            label="Note name"
            onChange={handleChangeName}
            margin="normal"/>
         <TextField
            id="content"
            label="content"
            onChange={handleChangeContent}
            margin="normal"/>
         <Button onClick={onCreateNote} variant="outlined" color="primary">
         Create Gist
         </Button>
      </CardContent>
   </Card>
   <NoteBookDetail props={props}></NoteBookDetail>
  <NoteList props={props}></NoteList>
    </div>
  );
  
export default NoteInnner


