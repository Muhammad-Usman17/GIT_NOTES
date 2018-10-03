// lib
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import beautify from 'beautify';

//  src
import './NoteItem.css';
import '../../shared-styles/NoteList.css';

const NoteItemInner = props => {
  const {
    filename,
    language,
    type,
    content,
    classStyle,
    index,
    onClickDelete,
    onClickUpdate,
  } = props;
  return (
    <ListItem key={index} role={undefined} dense button>
      <ExpansionPanel className="NoteList-Expansion-Panel">
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className="NoteList-Expansion-Summary">
            Name: {filename}
          </Typography>
          <Typography className="NoteList-Expansion-Summary">
            language: {language}
          </Typography>
          <Typography className="NoteList-Expansion-Summary">
            type: {type}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <pre>
              {content}
            </pre>
          </Typography>
        </ExpansionPanelDetails>
        <Button
          color="primary"
          className={classStyle}
          onClick={() => {
            onClickDelete(filename);
          }}
        >
          Delete Note
        </Button>
        <Button
          color="primary"
          className={classStyle}
          onClick={() => {
            onClickUpdate(filename, content);
          }}
        >
          Update Note
        </Button>
      </ExpansionPanel>
    </ListItem>
  );
};
export default NoteItemInner;
