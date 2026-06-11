import React from 'reac';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Pools from './pages/Pools';
import Fountains from './pages/Fountains';
import Landscape from './pages/Landscape';
import Plants from './pages/Plants';
import About from './pages/About';
import Contact from './pages/Contact';
import Magic from './pages/Magic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pools" element={<Pools />} />
        <Route path="/fountains" element={<Fountains />} />
        <Route path="/landscape" element={<Landscape />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/magic" element={<Magic />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);