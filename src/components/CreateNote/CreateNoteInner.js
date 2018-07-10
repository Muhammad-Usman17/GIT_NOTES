// libs
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const CreateNoteInner = props => {
  const { onChangeName, onChangeContent, onClickCreate } = props;
  return (
    <Card className="Home-Card">
      <CardHeader className="Home-Card-Header" title="Create Note" />
      <CardContent className="Home-CreateDiv">
        <TextField id="name" label=" Note name" onChange={onChangeName} margin="normal" />
        <TextField
          id="description"
          label="Description"
          onChange={onChangeContent}
          margin="normal"
        />
        <Button onClick={onClickCreate} variant="outlined" color="primary">
          Create Note
        </Button>
      </CardContent>
    </Card>
  );
};
export default CreateNoteInner;
