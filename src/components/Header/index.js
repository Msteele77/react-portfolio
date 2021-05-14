import React, { useState } from "react";
import Headshot from "../../assets/images/headshot.png";

function Header() {
  return (

    <header className="flex-row px-1 header">

      {/* <div class="hero"> */}


      <div class="hero" data-testid="link" href="/">
        <img
          src={Headshot}
          class="headshot"

        />
        <h1>MACHEYA</h1>
        <p class="tag">Full Stack Web Developer</p>
        <p class="about">
        Full Stack developer who’s passionate about the creative and visual aspects of
         programming. Graduate of University of Utah’s Full-Stack Web Development
          program. Recently designed and built the front-end of a social media 
          application for a group project using HTML, CSS, Handlebars.js, and 
          Javascript with an emphasis in Bootstrap. Excited to build functional 
          and attractive products by leveraging background in Quality Assurance to 
          bring the best user experience. 
      </p>
      </div>

     



      <ul className="flex-row navigation">

        {/* <li className="mx-2">
          <a data-testid="about" href="#about">
            About Me
          </a>
        </li> */}

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
          <a data-testid="contact" href="#contact-section">
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