import React from "react";
import '../App.css';
// import { Container, Row, Col } from "react-bootstrap";
// import Jumbotron from 'react-bootstrap/Jumbotron'

const Carosel = () => {
    
    return(
       <div>
         <img alt="mountain" className="photo above" src={require ('../images/mtn.png')} />
         <img alt="noah" className="photo2 above" src={require ('../images/me.png')} />
         <img alt="chess" className="photo3 above" src={require ('../images/chess.png')} />
       </div>
           
     
    );
}
export default Carosel;