// lib
import React from 'react';

// src

import NoteBookDetails from '../NoteBookDetails';
import NotesList from '../NotesList';
import CreateNote from '../CreateNote';

const NoteInner = props => {
  const { notebook, dispatch, match, owner, description, lastUpdated, note, notes, token } = props;
  return (
    <div>
      <CreateNote match={match} token={token} dispatch={dispatch} />
      <NoteBookDetails
        note={note}
        description={description}
        lastUpdated={lastUpdated}
        owner={owner}
      />
      <NotesList notes={notes} match={match} dispatch={dispatch} token={token} />
    </div>
  );
};
export default NoteInner;
