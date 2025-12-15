// src/App.js

import React from 'react';

// Import all section components
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Technologies from './components/Technologies';
import Project from './components/Project';
import Certificates from './components/Certificates';
import Contact from './components/Contact'; 

const App = () => {
    return (
        <div className="container">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Technologies />
            <Project />
            <Certificates />
            <Contact />
        </div>
    );
};

export default App;