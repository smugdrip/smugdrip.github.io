import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './utility/Scroll.tsx';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element with ID "root" not found in the document.');
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </StrictMode>,
);
