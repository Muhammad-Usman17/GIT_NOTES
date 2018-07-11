// lib
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const Notification = props => {
  const { isOpened, message, handleClose } = props;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={isOpened}
      autoHideDuration={6000}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={
        <span id="message-id">
          {message}
        </span>
      }
    />
  );
};
export default Notification;
