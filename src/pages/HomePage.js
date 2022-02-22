import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import Carosel from '../components/Carosel';
import About from './About';
import Hometitle from '../assets/HomeTitle';
const HomePage = () => {
  return(
        <div>
          <Hometitle />
          <Hero></Hero>
          <Carosel></Carosel>
          <About></About>
        </div>
     );
}
export default HomePage;