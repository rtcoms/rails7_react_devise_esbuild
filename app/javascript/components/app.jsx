import React, {useEffect, useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import {
  Routes,
  Route,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import jwtDecode from "jwt-decode";
import { AuthContext } from "../AuthContext";

const theme = createTheme();

export default function App() {
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const getCurrentUser = () => {
    if(token) {
      return jwtDecode(token);
    }
    return null;
  }

  const handleUserSignout = () => {
    window.localStorage.setItem("token", null);
    setToken(null);
    window.localStorage.clear()
    navigate("/", {});
  }

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            {!getCurrentUser() && <Typography variant="h6" color="inherit" noWrap>Rails React App layout</Typography>}
            {getCurrentUser() && <Typography variant="h6" color="inherit" noWrap>Hello {getCurrentUser().email}</Typography>}
            <Link to="/">Home</Link>
            {!getCurrentUser() && <Link to={'/signup'} color={'#000'}>Register</Link>}
            {!getCurrentUser() && <Link to={'/login'} color={'#fff'}>Login</Link>}
            {getCurrentUser() && <Button color={'warning'} onClick={handleUserSignout}>Sign out</Button>}
          </Toolbar>
        </AppBar>
        <main>
          <Routes>
            <Route path="/" element={<Home currentUser={getCurrentUser()} />}/>
            <Route path="/signup" element={<Register currentUser={getCurrentUser()}/>} />
            <Route path="/login" element={<Login currentUser={getCurrentUser()}/>} />
          </Routes>
        </main>
    </ThemeProvider>
  );
}
