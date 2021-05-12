import React from 'react';
import budgetTracker from "../../assets/images/budget.png";

function Project(props) {

  const projects = {
    name: "Budget Tracker",
    description: "Budget Tracker Description"
  };

  return (

    <section>

      <article id="projects" class="content-section">

        <div class="flex-column">

        </div>

        <div class="grid-wrapper">
          <div class="grid-container-2">

            <div class="grid-item item-1">
              <div class="project-heading"><p >Run Buddy</p></div>
              
              <a class="deployed-link" href="https://msteele77.github.io/run-buddy/">Deployed Application</a>
              <a class="github-link" href="https://msteele77.github.io/run-buddy/">GitHub</a>
            </div>

            <div class="grid-item item-2">
              <div class="project-heading"><p >Run Buddy</p></div>
              
              <a class="deployed-link" href="https://msteele77.github.io/run-buddy/">Deployed Application</a>
              <a class="github-link" href="https://msteele77.github.io/run-buddy/">GitHub</a>
            </div>

            <div class="grid-item item-3">
              <div class="project-heading"><p >Run Buddy</p></div>
              
              <a class="deployed-link" href="https://msteele77.github.io/run-buddy/">Deployed Application</a>
              <a class="github-link" href="https://msteele77.github.io/run-buddy/">GitHub</a>
            </div>

            <div class="grid-item item-4">
              <div class="project-heading"><p >Run Buddy</p></div>
              
              <a class="deployed-link" href="https://msteele77.github.io/run-buddy/">Deployed Application</a>
              <a class="github-link" href="https://msteele77.github.io/run-buddy/">GitHub</a>
            </div>

            <div class="grid-item item-5">
              <div class="project-heading"><p >Run Buddy</p></div>
              
              <a class="deployed-link" href="https://msteele77.github.io/run-buddy/">Deployed Application</a>
              <a class="github-link" href="https://msteele77.github.io/run-buddy/">GitHub</a>
            </div>

            <div class="grid-item item-6">
              <div class="project-heading"><p >Run Buddy</p></div>
              
              <a class="deployed-link" href="https://msteele77.github.io/run-buddy/">Deployed Application</a>
              <a class="github-link" href="https://msteele77.github.io/run-buddy/">GitHub</a>
            </div>
            

        </div>
        </div>
      </article>

    </section >

  );
}

export default Project;