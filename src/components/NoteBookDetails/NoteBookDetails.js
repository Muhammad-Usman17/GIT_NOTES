// libs
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// src

const NoteBookDetails = props => {
  const { owner, description, lastUpdated, note } = props;
  return (
    <Card>
      <CardHeader className="NoteList-Card-Header" title="NoteBook Details" />
      <CardContent className="NoteList-Details">
        <Card className="NoteList-Details-Card">
          <CardContent>
            <Typography color="textSecondary">NoteBook Name</Typography>
            <Typography component="p">
              {Object.keys(note)[0]}
            </Typography>
          </CardContent>
        </Card>
        <Card className="NoteList-Details-Card">
          <CardContent>
            <Typography color="textSecondary">Description</Typography>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
        </Card>
        <Card className="NoteList-Details-Card">
          <CardContent>
            <Typography color="textSecondary">Owner</Typography>
            <Typography component="p">
              {owner}
            </Typography>
          </CardContent>
        </Card>
        <Card className="NoteList-Details-Card">
          <CardContent>
            <Typography color="textSecondary">last Updated</Typography>
            <Typography component="p">
              {lastUpdated}
            </Typography>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};
export default NoteBookDetails;
