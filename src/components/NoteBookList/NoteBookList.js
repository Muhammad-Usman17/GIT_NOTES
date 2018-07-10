// lib
import React from 'react';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// src

import NoteBookItem from '../NoteBookItem';
import '../../shared-styles/NoteList.css';

const NoteBookList = props => {
  const { notebooks, token, dispatch } = props;
  return (
    <Card className="Home-Card">
      <CardHeader className="Home-Card-Header" title="List of My Notebooks" />
      <CardContent>
        <List>
          {notebooks.map((value, index) =>
            <NoteBookItem token={token} value={value} index={index} dispatch={dispatch} />
          )}
        </List>
      </CardContent>
    </Card>
  );
};
export default NoteBookList;
