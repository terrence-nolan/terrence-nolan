import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import Layout from './components/Layout/Layout';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

const AppRoutes = ({toggleTheme, theme}) => {
    return (
        <Routes>
            <Route path="/" element={<Layout toggleTheme={toggleTheme} theme={theme}><AboutPage /></Layout>} />
            <Route path="/experience" element={<Layout toggleTheme={toggleTheme} theme={theme}><ExperiencePage /></Layout>} />
            <Route path="/projects" element={<Layout toggleTheme={toggleTheme} theme={theme}><ProjectsPage /></Layout>} />
        </Routes>
    );
};

export default AppRoutes;
