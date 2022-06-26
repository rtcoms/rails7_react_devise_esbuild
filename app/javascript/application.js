// Entry point for the build script in your package.json

import App from './components/app'
import {AuthContextProvider} from "./AuthContext";
import {createRoot} from "react-dom/client";
import * as React from "react";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AuthContextProvider><App tab="home" /></AuthContextProvider>);