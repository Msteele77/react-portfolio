import React, { useState } from "react";


function Header() {
  return (
      <header className="flex-row px-1">
        <h1>
            <a data-testid="link" href="/">
            MACHEYA
            </a>
        </h1>

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
          <a data-testid="contact" href="#contact">
            Contact Me
          </a>
        </li>

        <li className="mx-2">
          <a data-testid="resume" href="#resume">
            Resume
          </a>
        </li>

        </ul>
    </header>
    
  );
}

export default Header;