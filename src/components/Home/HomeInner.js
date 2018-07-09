//lib
import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
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
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CopyToClipboard from 'react-copy-to-clipboard';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';



// src
import './Home.css';

const HomeInnner = ({handleNotebookDetails,handleClickCopy,handleCopied, handleChangeName,handleChangeDescription, handleDelete,state,onClickGist,  props }) => (
  <div>
   <Card className="Home-Card">
      <CardHeader className="Home-Card-Header"
         title="Create Notebook" />
      <CardContent className="Home-CreateDiv">
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
         <Button onClick={onClickGist} variant="outlined" color="primary">
         Create Gist
         </Button>
      </CardContent>
   </Card>
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
   <div >
      <Card className="Home-Card">
         <CardHeader className="Home-Card-Header"
            title="List of My Notebooks"
            />
         <CardContent>
            <List>
               {props.gist.map((value, index) => (
               <ListItem
               key={index}
               role={undefined}
               dense
               button
                onClick={handleNotebookDetails(value.id)}
              >
               <ListItemText
               primary={`${Object.keys(value.files)[0]}`}
               secondary={` ${value.description}`}/>
               <ListItemSecondaryAction>
                  <IconButton aria-label="delete" onClick={handleDelete(value,index)}>
                     <DeleteIcon />
                  </IconButton>
                  <CopyToClipboard   text={value.html_url}>
                     <IconButton aria-label="share"onClick={handleClickCopy}  >
                        <ShareIcon />
                     </IconButton>
                  </CopyToClipboard>
               </ListItemSecondaryAction>
               </ListItem>
               ))}
            </List>
         </CardContent>
      </Card>
   </div>
   <Snackbar
   anchorOrigin={{
   vertical: 'bottom',
   horizontal: 'left',
   }}
   open={props.deleted}
   autoHideDuration={5000}
   ><SnackbarContent
   message={'Gist Successfully deleted.!' }/>
   </Snackbar>
   <Snackbar
   anchorOrigin={{
   vertical: 'bottom',
   horizontal: 'left',
   }}
   open={state.copied}
   autoHideDuration={5000}
   onClose={handleCopied}>
   <SnackbarContent
   message={'Gist Notebook URL is copied to clipboard.!'}/>
   </Snackbar>
</div>
 );
  
export default HomeInnner


