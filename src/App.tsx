import './index.css'
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}

export default App;