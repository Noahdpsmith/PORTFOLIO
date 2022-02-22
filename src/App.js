// src/App.js
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
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
import Background from './components/Background';
import Hero from './components/Hero';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <Router>
              <Navbar className='border-bottom above feet' expand='lg'>
                <Navbar.Brand>Noah Smith</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-toggle' className='border-1'  />
                  <NavbarCollapse id='navbar-toggle'>
                  <Nav className='ml-auto'>
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="about">About</Link>
                    <Link className='nav-link' to="contact">Contact</Link>
                    <Link className='nav-link' to="resume">Resume</Link>
                    <Link className='nav-link' to="portfolio">Portfolio</Link>

                  </Nav>
                  </NavbarCollapse>
              </Navbar>
              <Hero className="above"/>
              
          <Container className='p-0' fluid={true}>
              
              <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="resume" element={<Resume />} />
              <Route path="portfolio" element={<Portfolio />} />

              </Routes>
              
              <Background />
              </Container>
              
    <Footer  />
    
    
    </Router>
  );
}

export default App;