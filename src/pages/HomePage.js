import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import Carosel from '../components/Carosel';
import About from './About';

const HomePage = () => {
  return(
        <div>
          <Hero></Hero>
          <Carosel></Carosel>
          <About></About>
        </div>
     );
}
export default HomePage;