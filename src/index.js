import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import ScrollToTop from './ScrollToTop';

import Home from './pages/Home';
import Pools from './pages/Pools';
import Fountains from './pages/Fountains';
import Landscape from './pages/Landscape';
import Plants from './pages/Plants';
import About from './pages/About';
import Contact from './pages/Contact';
import Magic from './pages/Magic';
import Contracting from './pages/Contracting'; // ✅ تم إضافة استيراد صفحة المقاولات هنا

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pools" element={<Pools />} />
        <Route path="/fountains" element={<Fountains />} />
        <Route path="/landscape" element={<Landscape />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/magic" element={<Magic />} />
        <Route path="/contracting" element={<Contracting />} /> {/* ✅ تم إضافة مسار صفحة المقاولات هنا */}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);