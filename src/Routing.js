import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import Layout from './components/Layout/Layout';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><AboutPage /></Layout>} />
            <Route path="/experience" element={<Layout><ExperiencePage /></Layout>} />
            <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
        </Routes>
    );
};

export default AppRoutes;
