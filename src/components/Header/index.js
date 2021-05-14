import React, { useState } from "react";
import Headshot from "../../assets/images/headshot.png";

function Header() {
  return (

   
      <header className="flex-row px-1 header">


        {/* <div class="hero"> */}
         <div>
           
    <div class="hero" data-testid="link" href="/">
    <img 
    src={Headshot}
    class="headshot"
              
            />
    <h1>MACHEYA STEELE
   
    </h1>
    
    <p class="tag">Full Stack Web Developer</p>
    </div>
    
    
    </div>
    

        <ul className="flex-row navigation">
      
        <li className="mx-2">
          <a data-testid="about" href="#about">
            About Me
          </a>
        </li>

        <li className="mx-2">
          <a data-testid="portfolio" href="#portfolio">
            Portfolio
          </a>
        </li>

        <li className="mx-2">
          <a data-testid="resume" href="#resume">
            Resume
          </a>
        </li>

        <li className="mx-2">
          <a data-testid="contact" href="#contact">
            Contact Me
          </a>
        </li>

        <li className="mx-2">
          <a data-testid="connect" href="#connect">
            Connect
          </a>
        </li>

        </ul>
        {/* </div> */}
        
    </header>
    
  );
}

export default Header;