// lib
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import CopyToClipboard from 'react-copy-to-clipboard';

const NoteBookListInner = props => {
  const { id, description, files, onClickDelete, onClickItem, htmlUrl, index } = props;
  return (
    <ListItem key={id} role={undefined} dense button onClick={onClickItem}>
      <ListItemText primary={`${Object.keys(files)[0]}`} secondary={description} />
      <ListItemSecondaryAction>
        <IconButton aria-label="delete" onClick={onClickDelete}>
          <DeleteIcon />
        </IconButton>
        <CopyToClipboard text={htmlUrl}>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CopyToClipboard>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
export default NoteBookListInner;
