// libs
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const CreateNotebookInner = ({ onChangeName, onChangeDescription, onClickCreate }) =>
  <Card className="Home-Card">
    <CardHeader className="Home-Card-Header" title="Create Notebook" />
    <CardContent className="Home-CreateDiv">
      <TextField id="name" label=" NoteBook name" onChange={onChangeName} margin="normal" />
      <TextField
        id="description"
        label="Description"
        onChange={onChangeDescription}
        margin="normal"
        multiline
      />
      <Button onClick={onClickCreate} variant="outlined" color="primary">
        Create Notebook
      </Button>
    </CardContent>
  </Card>;

export default CreateNotebookInner;
