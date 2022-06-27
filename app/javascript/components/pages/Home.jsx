import *  as React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom'
import Profile from './Profile';
import InvitationForm from '../InvitationForm';

export default function Home({currentUser}) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          User info
        </Typography>
        {currentUser && <Profile/>}
        <Typography variant={'h5'}>Invitation from</Typography>
        {currentUser && <InvitationForm/>}
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          {!currentUser && <Link to='/signup'><Button variant="contained">Register</Button></Link>}
          {!currentUser && <Link to='/login'><Button variant="contained">Sign in</Button></Link>}

        </Stack>
      </Container>
    </Box>
  );
}