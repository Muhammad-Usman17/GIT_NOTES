// libss
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
// src
import './Search.css';
import Header from '../Header';
import NoteBookDetails from '../NoteBookDetails';
import NotesList from '../NotesList';

const SearchInner = props => {
  const {
    onChangeId,
    onClickSearch,
    dispatch,
    noteBookId,
    owner,
    description,
    lastUpdated,
    note,
    notes,
    token,
    onClickSignout,
    user,
    authenticated,
  } = props;
  return (
    <div>
      <Header onClickSignout={onClickSignout} user={user} authenticated={authenticated} />
      <Card className="Search-Div">
        <TextField
          className="Search-TextBox"
          id="id"
          label="Enter NoteBook Id"
          onChange={onChangeId}
          margin="normal"
        />
        <Button
          onClick={onClickSearch}
          className="Search-Button"
          variant="outlined"
          color="primary"
        >
          Search
        </Button>
      </Card>
      <NoteBookDetails
        note={note}
        description={description}
        lastUpdated={lastUpdated}
        owner={owner}
      />
      <NotesList notes={notes} noteBookId={noteBookId} dispatch={dispatch} token={token} />
    </div>
  );
};
export default SearchInner;
