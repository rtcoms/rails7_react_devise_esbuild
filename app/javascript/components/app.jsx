import React from 'react';
import  { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Home from './pages/Home';
import Register from './pages/Register';
import { getCurrentUser } from "../services/authService";
import useStore from '../store';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function App() {

  const currentUser = getCurrentUser();
  console.log('CURRENT USER', currentUser);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>Rails React App layout</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Routes>
            <Route path="/" element={<Home/ >} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}
