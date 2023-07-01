import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Music from './components/Music';
import Home from './components/Home';


const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};


export default App;