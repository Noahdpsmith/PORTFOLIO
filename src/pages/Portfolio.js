
import React from 'react';
import '../App.css';



function Portfolio(props) {
  return (
   <div>
       
    <div>
    <img alt="portfolio picture" className="photo above" src={require ('../images/portfolio.png')} />

      <div className="firstcard above">
                <h1>Note Taker</h1>
            <p>Description: 
                 A basic app that allows you to see the weather
                 for a specific searched or saved city.",</p>
            <a href='https://github.com/Noahdpsmith/Challenge-11'>github</a>
            <a href='https://note-taker-bby.herokuapp.com/notes.html'>Live</a> 

    </div>
    <img alt="ORM picture" className="photo2 above" src={require ('../images/chal.png')} />

    <div className="secondcard above">
                <h1>ORM</h1>
            <p>Description:
                 This is an application that uses a express.js
                  API, sequelize to connect to mysql database. 
                  also shows GET, POST, DELETE and PUT routes 
                  that were tested with insomnia.
    </p>
            <a href='https://github.com/Noahdpsmith/Challenge-11'>github</a>   
            <a href='https://note-taker-bby.herokuapp.com/notes.html'>Live</a>  

    </div>
    <img alt="bookclub picture" className="photo3 above" src={require ('../images/bookclub.png')} />

    <div className="thirdcard above">
                <h1>bookclub</h1>
            <p>Description: 
                With the project we collaborated to create a app
                 in which we could use to discuss books and other
                  readable material using MySQL Handlebars Express
                   Node HTML CSS Javascript Socket.IO
    </p>
            <a href='https://agile-bastion-07410.herokuapp.com/'>github</a>
            <a href='https://github.com/Noahdpsmith/BookWorm'>Live</a>   

    </div>
    <img alt="covid picture" className="photo4 above" src={require ('../images/covid.png')} />

    <div className="fourthcard above">
                <h1>covid 19</h1>
            <p>Description:
                Application allows users to search Covid-19 testing
                 sites within their zipcodes.</p>
            <a href='https://github.com/Noahdpsmith/group10projecthttps://github.com/Jake-Roberts/group10project'>github</a>  
            <a href='https://jake-roberts.github.io/group10project/'>Live </a>

    </div>
    <img alt="portfolio picture" className="photo5 above" src={require ('../images/portfolio.png')} />

    <div className="fifthcard above">
                <h1 className='above'>Portfolio start</h1>
            <p className='above'>Description:
                 A basic work portfolio that holds my projects for
                  the full stack development class.</p>
            <a className='above' href='https://github.com/Noahdpsmith/Challenge-2'>github</a>  
            <a className='above' href='https://noahdpsmith.github.io/Challenge-2/'>Live</a> 

    </div>
    <img alt="Run Buddy" className="photo6 above" src={require ('../images/runbuddy.png')} />

    <div className="sixthcard above">
                <h1>Run Buddy</h1>
            <p>Description: 
            A commissioned website for a team of people who want
            to help you find someone to run with,</p>
            <a href='https://github.com/Noahdpsmith/runnin'>github</a> 
            <a href='https://noahdpsmith.github.io/runnin/'>Live</a> 

    </div>
    </div>      
</div>             
  );
}


export default Portfolio;