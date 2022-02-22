import React from 'react';
import '../App.css';
import Carosel from '../components/Carosel';
import Hero from '../components/Hero';
import Abouttitle from '../assets/AboutTitle';
function About(props) {
  return(
      
    
    <div>
        <Hero></Hero>
        <Carosel></Carosel>
        {/* <Abtitle></Abtitle> */}
        <Abouttitle />
        <h1 className='title-abt above'>About Me</h1>
            <p className='abt above'>
                I am A 24 year old who has had ADHD his whole life and have finally learned to channel it!
                I grew up Very smart to the point where i didnt have to try in school, it didnt interest me
                because it wasnt a challenge.  Because i was smart and had ADHD i never built Good work or 
                study habits.  Eventually i found my self in a position where i was a failure because i just 
                never truely tried at anythinng.  Then suddenly one day my mindset changed and now i can used
                the exact thing that was holding me back. I am still A loud energetic person and i need to love 
                what i do. 
                </p>
                <h1 className='title-abt2 above'>Here's a few things I love</h1>
                <p className='abt2 above'>
                I am someone who loves problem solving! I love life! I love chess! I love coding! I love video 
                games! I love sports! I am ultra competitive!  I love working on Teams!  I love Comunications! 
                I love Psychology! I love Comedy! I love Acting! I love making music! I love friends! And I Love
                family!
            </p>
    </div>
  );
}
export default About;