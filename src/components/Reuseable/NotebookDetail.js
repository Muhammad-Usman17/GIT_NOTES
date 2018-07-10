// libs
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// src
import './NoteList.css';

const NoteBookDetail = ({ props }) =>
  <Card>
    <CardHeader className="NoteList-Card-Header" title="Gist Details" />
    <CardContent className="NoteList-Details">
      <Card className="NoteList-Details-Card">
        <CardContent>
          <Typography color="textSecondary">Gist Name</Typography>
          <Typography component="p">
            {Object.keys(props.note)[0]}
          </Typography>
        </CardContent>
      </Card>
      <Card className="NoteList-Details-Card">
        <CardContent>
          <Typography color="textSecondary">Description</Typography>
          <Typography component="p">
            {props.description}
          </Typography>
        </CardContent>
      </Card>
      <Card className="NoteList-Details-Card">
        <CardContent>
          <Typography color="textSecondary">Owner</Typography>
          <Typography component="p">
            {props.owner}
          </Typography>
        </CardContent>
      </Card>
      <Card className="NoteList-Details-Card">
        <CardContent>
          <Typography color="textSecondary">last Updated</Typography>
          <Typography component="p">
            {props.lastUpdated}
          </Typography>
        </CardContent>
      </Card>
    </CardContent>
  </Card>;

export default NoteBookDetail;
