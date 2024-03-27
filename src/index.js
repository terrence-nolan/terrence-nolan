import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import MainPage from "./pages/MainPage/MainPage";

library.add(fas);

// useEffect(() => {
//     window.scrollTo(0, 0);
// }, [])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MainPage />
);
