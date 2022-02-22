import React from "react";
import Particles from 'react-tsparticles';
import particlesConfig from '../config/particlesConfig';
import logo from '../logo.svg';
import '../App.css';

const Background = () => {
return(
    <div style={{ position: 'relative', overflow: "hidden" }}>
            <div style={{ position: 'absolute'}}>
              <Particles  height="100vh" width="100vw" params={particlesConfig} />
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
    );
}
export default Background;