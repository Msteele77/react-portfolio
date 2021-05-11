import React from 'react';
import Project from '../Project';

function Portfolio (props) {
    const { currentCategory } = props;
  return (
    
      <section id="portfolio">
            
            <h2>Projects</h2>
    <Project></Project>
               
      </section>
            
  );
}

export default Portfolio;