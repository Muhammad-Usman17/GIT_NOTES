// lib
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const UpdateNote = props => {
  const {
    isOpened,
    orignalFileName,
    dialogName,
    dailogContent,
    onClickCancel,
    onClickSave,
    handleChangeName,
    handleChangeContent,
  } = props;
  return (
    <Dialog
      open={isOpened == undefined ? false : isOpened}
      onClose={() => {
        onClickCancel;
      }}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        {orignalFileName}
      </DialogTitle>
      <DialogContent>
        <TextField
          onChange={handleChangeName}
          margin="dense"
          id="dialogName"
          label="Note Name"
          type="email"
          fullWidth
          value={dialogName}
        />
        <TextField
          onChange={handleChangeContent}
          autoFocus
          margin="dense"
          id="dialogContent"
          label="Note Content"
          type="email"
          fullWidth
          value={dailogContent}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickCancel} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            onClickSave(orignalFileName);
          }}
          color="primary"
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default UpdateNote;
