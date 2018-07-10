//libs
import React from 'react'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

//src
import './NoteList.css';

const NoteList = ({
    props,
    onDeleteNote,
    onUpdateNote,
    openUpdateDailog,
    closeUpdateDailog,
    handleChangeDailogContent,
    handleChangeDailogName,
    state,
    classStyle
  }) => (
    <Card>
    <CardHeader className="NoteList-Card-Header" title="List of Notes" />
    <CardContent className="NoteList-Expansion-Panel">
        <List>
            {props.notes.map((value,index) => (
            <ListItem key={index} role={undefined} dense button>
                <ExpansionPanel className="NoteList-Expansion-Panel">
                    <ExpansionPanelSummary expandIcon={ <ExpandMoreIcon /> }>
                    <Typography className="NoteList-Expansion-Summary">Name: {value.filename}</Typography>
                    <Typography className="NoteList-Expansion-Summary">language: {value.language}</Typography>
                    <Typography className="NoteList-Expansion-Summary">type: {value.type}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {value.content}
                        </Typography>
                    </ExpansionPanelDetails>
                    <Button color="primary" className={classStyle} onClick={()=>{onDeleteNote(value.filename)}}>Delete Note</Button>
                    <Button color="primary" className={classStyle} onClick={()=>{openUpdateDailog(value.filename,value.content)}}>Update Note</Button>
                </ExpansionPanel>
            </ListItem>
            ))}
        </List>
    </CardContent>
    <Dialog open={state.open} onClose={()=>{closeUpdateDailog}} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">{state.orignalFileName}</DialogTitle>
        <DialogContent>

            <TextField onChange={handleChangeDailogName} margin="dense" id="dialogName" label="Note Name" type="email" fullWidth value={state.dialogName} />
            <TextField onChange={handleChangeDailogContent} autoFocus margin="Note Content" id="dialogContent" label="Note Content" type="email" fullWidth value={state.dailogContent} />

        </DialogContent>
        <DialogActions>
            <Button onClick={()=>{closeUpdateDailog}} color="primary"> Cancel
            </Button>
            <Button onClick={()=>{onUpdateNote(state.orignalFileName)}} color="primary"> Update
            </Button>
        </DialogActions>
    </Dialog>
</Card>


  );
  
export default NoteList