// lib
import React from 'react';

// src

import NoteBookDetails from '../NoteBookDetails';
import NotesList from '../NotesList';
import CreateNote from '../CreateNote';
import ProgressBar from '../ProgressBar';

const NoteInner = props => {
  const {
    notebook,
    dispatch,
    noteBookId,
    owner,
    description,
    lastUpdated,
    note,
    notes,
    token,
    isLoading,
  } = props;
  return (
    <div>
      <ProgressBar isLoading={isLoading} />
      <CreateNote noteBookId={noteBookId} token={token} dispatch={dispatch} />
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
export default NoteInner;
