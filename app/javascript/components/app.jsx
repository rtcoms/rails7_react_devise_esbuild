import React, {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Home from './pages/Home';
import Register from './pages/Register';
import { signOut } from "../services/authService";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import jwtDecode from "jwt-decode";
const theme = createTheme();

export default function App() {
  const [currentUserToken, setCurrentUserToken] = React.useState(null);

  useEffect(()=>{
    const token = window.localStorage.getItem("token");
    console.log('FETCHING TOKEN', token);
    setCurrentUserToken(token);
  },[])

  const getCurrentUser = () => {
    // get token from state
    const token = currentUserToken;
    if(token) {
      return jwtDecode(token);
    }
    return null;
  }

  const handleUserSignout = () => {
    signOut()
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            {!getCurrentUser() && <Typography variant="h6" color="inherit" noWrap>Rails React App layout</Typography>}
            {getCurrentUser() && <Typography variant="h6" color="inherit" noWrap>Hello {getCurrentUser().email}</Typography>}
            {getCurrentUser() && <Button color={'warning'} onClick={handleUserSignout}>Sign out</Button>}
            {!getCurrentUser() && <Link color={'#000'}>Register</Link>}
            {!getCurrentUser() && <Link color={'#fff'}>Login</Link>}
          </Toolbar>
        </AppBar>
        <main>
          <Routes>
            <Route path="/" element={<Home currentUser={getCurrentUser()} />} forceRefresh={true}/>
            <Route path="/signup" element={<Register currentUser={getCurrentUser()}/>} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}
