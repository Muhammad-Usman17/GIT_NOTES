// lib
import React from 'react';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// src

import NoteItem from '../NoteItem';

const NotesList = props => {
  const { notes, token, dispatch, match } = props;
  return (
    <Card className="Home-Card">
      <CardHeader className="Home-Card-Header" title="List of My Notebooks" />
      <CardContent>
        <List>
          {notes.map((value, index) =>
            <NoteItem token={token} value={value} index={index} dispatch={dispatch} match={match} />
          )}
        </List>
      </CardContent>
    </Card>
  );
};
export default NotesList;
