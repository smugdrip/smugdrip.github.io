// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import About from './components/About/About.tsx';
import Contact from './components/Contact/Contact.tsx';
import Projects from './components/Projects/Projects.tsx';
import { HashRouter, Routes, Route } from 'react-router-dom';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element with ID "root" not found in the document.');
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);