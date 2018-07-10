// lib
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CopyToClipboard from 'react-copy-to-clipboard';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

// src
import './Home.css';
import CreateNotebook from '../CreateNotebook';
import NoteBookList from '../NoteBookList';

const HomeInnner = props => {
  const { token, notebooks, dispatch } = props;
  return (
    <div>
      <CreateNotebook token={token} />
      <NoteBookList token={token} notebooks={notebooks} dipatch={dispatch} />
    </div>
  );
};

export default HomeInnner;
