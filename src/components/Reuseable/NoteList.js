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

import './NoteList.css';

const NoteList = ({props}) => (
    <Card >
      <CardHeader className="NoteList-Card-Header"
         title="List of Notes" />
      <CardContent className="NoteList-Expansion-Panel">
         <List>
            {props.notes.map(value => (
            <ListItem
               key={value}
               role={undefined}
               dense
               button
               >
               <ExpansionPanel className="NoteList-Expansion-Panel">
                  <ExpansionPanelSummary  expandIcon={
                  <ExpandMoreIcon />
                  }>
                  <Typography className="NoteList-Expansion-Summary">Name: {value.filename}</Typography >
                  <Typography className="NoteList-Expansion-Summary">language: {value.language}</Typography>
                  <Typography className="NoteList-Expansion-Summary">type: {value.type}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                     <Typography>
                        {value.content}
                     </Typography>
                  </ExpansionPanelDetails>
               </ExpansionPanel>
            </ListItem>
            ))}
         </List>
      </CardContent>
   </Card>
  );
  
export default NoteList