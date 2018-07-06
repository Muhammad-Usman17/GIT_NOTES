import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ShareIcon from "@material-ui/icons/Share";


const HomeInnner = ({ handleChangeName,handleChangeDescription ,onClickGist,  props }) => (
  <div>
    <TextField
      id="name"
      label="Gist name"
      onChange={handleChangeName}
      margin="normal"/>
    <TextField
      id="description"
      label="Description"
      onChange={handleChangeDescription}
      margin="normal"/>
    <Button onClick={onClickGist}>
      Create Gist
    </Button>
    <Dialog
      open={props.created}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{"Operation Sucessful"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          New Gist Notebook is successfully created.
        </DialogContentText>
      </DialogContent>
    </Dialog>


    <List>
          {props.gist.map(value => (
            <ListItem
              key={value}
              role={undefined}
              dense
              button
             // onClick={this.handleToggle(value)}
             // className={classes.listItem}
            >
              <ListItemText
                primary={`${Object.keys(value.files)[0]}`}
                secondary={` ${value.description}`}
              />

              <ListItemSecondaryAction>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
  </div>
  );
  
export default HomeInnner


