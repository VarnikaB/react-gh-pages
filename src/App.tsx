import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Publication from "./components/Publication/Publication";
import Hobbies from "./components/Hobbies/Hobbies";
import Contact from "./components/Contact/Contact";

const App = () => (
    <div className="App">
        <div style={{flex: 1}}>
            <Header />
        </div>
        <div style={{flex: 5}}>
            <Home />
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Education/>
            <Publication />
            <Hobbies />
            <Contact />
          <div>
              <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header></div>
        </div>
    </div>
  )

export default App;
