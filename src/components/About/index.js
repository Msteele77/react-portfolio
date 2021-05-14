import React from 'react';
// import Headshot from "../../assets/images/headshot.jpeg";

function About() {
  return (
    
    <section className="my-5 about-section">

         
   
      <h2 id="about">A Little About Me</h2>
      {/* <div class="grid-container"> */}
      
      {/* <img 
      src={Headshot}
      class="headshot"
                
              /> */}
      
      
      <div className="my-2 grid-child">
        <p class="about-para">
        Front-end developer who’s passionate about the creative and visual aspects of
         programming. Graduate of University of Utah’s Full-Stack Web Development
          program. Recently designed and built the front-end of a social media 
          application for a group project using HTML, CSS, Handlebars.js, and 
          Javascript with an emphasis in Bootstrap. Excited to build functional 
          and attractive products by leveraging background in Quality Assurance to 
          bring the best user experience. 
          </p>
        
          
        
      {/* </div> */}
      </div>
    </section>
  );
}

export default About;