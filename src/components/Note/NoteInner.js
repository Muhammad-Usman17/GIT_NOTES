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

const NoteInnner = ({
    handleChangeContent,
    handleChangeName,
    props,
    onCreateNote,
    onDeleteNote,
    onUpdateNote,
    openUpdateDailog,
    closeUpdateDailog,
    handleChangeDailogContent,
    handleChangeDailogName,
    state
  }) => (
    <div>
    <Card className="Note-Card">
        <CardHeader className="Note-Card-Header" title="Create Notebook" />
        <CardContent className="Note-CreateDiv">
            <TextField id="name" label="Note name" onChange={handleChangeName} margin="normal" />
            <TextField id="content" label="Note content" onChange={handleChangeContent} margin="normal" />
            <Button onClick={onCreateNote} variant="outlined" color="primary">
                Create Note
            </Button>
        </CardContent>
    </Card>
    <NoteBookDetail props={props}></NoteBookDetail>
    < NoteList props={ props } onDeleteNote={ onDeleteNote } onUpdateNote={ onUpdateNote } openUpdateDailog={ openUpdateDailog } closeUpdateDailog={ closeUpdateDailog } handleChangeDailogContent={ handleChangeDailogContent } handleChangeDailogName={ handleChangeDailogName } state={ state } classStyle="Note-List-Button">
        </NoteList>
</div>
  );
  
export default NoteInnner


