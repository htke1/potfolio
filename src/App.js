
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import './styles.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import LandingPage from './utils/landingPage';
import Projects from './utils/projectSect';
import Contact from './utils/contact'
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { lightTheme, darkTheme } from './utils/theme/theme';
import { GlobalStyles } from './utils/theme/global';

function App() {
    const [theme, setTheme] = useState('light');

// The function that toggles between themes
const toggleTheme = () => {
  console.log("click")
  if (theme === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

// const observer = new IntersectionObserver(entry => {
//   if (entry.isIntersecting) {
//     // Add the animation class
//     console.log("observing")
//     entry.target.classList.add('square-animation');
//   }
// });

// // Tell the observer which elements to track
// observer.observe(document.querySelector('.lead'));

    return (
      <div>
        <h6>Example heading <span class="badge badge-secondary">New</span></h6>
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
              <GlobalStyles/>
              <header>
              <nav className="navbar fixed-top navbar-expand-lg navbar-dark ">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">CodeRant</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="menu" className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#landing">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#project">Project</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="https://drive.google.com/file/d/1k_GyvatoeXKqWwHv0uLzt8hJrrJEj8KV/view?usp=sharing" >Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#contact" >Contact</a>
          </li>
        </ul>
        
      </div>
      <label className="switch mx-auto" id="toggle-label" >
  <input type="checkbox" onChange={toggleTheme}/>
  <span className="slider round"></span>
</label>
    </div>
  </nav>


              </header>
          <main>
          
              <LandingPage />
             
          </main>
          <footer>
          <Projects/>
              <Contact/>
          </footer>
          </ThemeProvider>
          </div>
    );
}

export default App;
