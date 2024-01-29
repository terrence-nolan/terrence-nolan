import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import Layout from './components/Layout/Layout';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout pageTitle="About Me"><AboutPage /></Layout>} />
            <Route path="/experience" element={<Layout pageTitle="Experience"><ExperiencePage /></Layout>} />
            <Route path="/projects" element={<Layout pageTitle="Projects"><ProjectsPage /></Layout>} />
        </Routes>
    );
};

export default AppRoutes;
