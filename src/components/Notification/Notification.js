// lib
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const Notification = props => {
  const { isCopied, message, onCloseSnakbar } = props;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={isCopied}
      autoHideDuration={6000}
      onClose={onCloseSnakbar}
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
