// user profile page which displays data after fetching from api
import *  as React from 'react';
import { useState } from 'react';
import {useEffect} from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { fetchUserProfile } from '../../services/apiService';

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUserProfile().then(response => {
      setUser(response.data);
    })
  },[])

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary">
          My info
        </Typography>
        <Typography variant="body2" component="p">
          {JSON.stringify(user)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Invite Friend</Button>
      </CardActions>
    </Card>
  );
}