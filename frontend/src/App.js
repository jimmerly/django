import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PillowLiteraturePage from './pages/PillowLiteraturePage';
import SwingMusicPage from './pages/SwingMusicPage';
import FurballPicturesPage from './pages/FurballPicturesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/pillowliterature" element={<PillowLiteraturePage />} />
        <Route path="/swingmusic" element={<SwingMusicPage />} />
        <Route path="/furballpictures" element={<FurballPicturesPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;