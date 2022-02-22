// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-tsparticles';
import particlesConfig from './config/particlesConfig';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact'
import Footer from './components/Footer';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap'; 

function App() {
  return (
    <Router>
          <Container className='p-0' fluid={true}>
              <Navbar className='border-bottom' bg='transparent' expand='lg'>
                <Navbar.Brand>Noah Smith</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-toggle' className='border-0'  />
                  <NavbarCollapse id='navbar-toggle'>
                  <Nav className='ml-auto'>
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/about">About</Link>
                    <Link className='nav-link' to="/contact">Contact</Link>
                    <Link className='nav-link' to="/resume">Resume</Link>
                  </Nav>
                  </NavbarCollapse>
              </Navbar>
              <Routes>
              <Route path="/" exact render={() => <HomePage title={this.state.ome.title} subTitle={this.state.home.subTitle} text={this.stat.home.text} />} />
              <Route path="/about" render={() => <About title={this.state.about.title} />} />
              <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />
              <Route path="/resume" render={() => <Resume title={this.state.resume.title} />} />
              </Routes>
          <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>
          </code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
        </a>
      </div>
    </div>
    
    <Footer  />

</Container>
    </Router>
  );
}

export default App;