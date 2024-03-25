import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './Routing';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter } from 'react-router-dom';

library.add(fas);

const setTheme = (theme) => {
    theme ??= localStorage.theme || "light";
    document.documentElement.dataset.theme = theme;
    localStorage.theme = theme;
};

const toggleTheme = () => {
    const currentTheme = localStorage.theme || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme); // Assuming setTheme is available here
};

// Set the initial theme (e.g., dark theme by default)
setTheme(); // You can change this to 'light' if you want light theme by default

const themeVar = localStorage.theme;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes toggleTheme={toggleTheme} theme={themeVar} />
        </BrowserRouter>
    </React.StrictMode>
);
