import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ApplicationPage } from './pages/ApplicationPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplicationPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
      </Routes>
    </BrowserRouter>;
}