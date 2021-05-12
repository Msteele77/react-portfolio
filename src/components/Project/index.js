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

            <a class="grid-item item-1" href="https://msteele77.github.io/run-buddy/">
              <div class="project-heading">
                <p>Run Buddy</p>
              </div>
            </a>

            <a class="grid-item item-2" href="https://msteele77.github.io/horiseon/">
              <div class="project-heading">
                <p>Horiseon</p>
              </div>
            </a>

            <a class="grid-item item-3" href="https://minimal-prepper.herokuapp.com/">
              <div class="project-heading">
                <p>The Minimal Prepper
                     </p>
              </div>
            </a>

            <a class="grid-item item-4" href="https://msteele77.github.io/Eats-n-such/">
              <div class="project-heading">
                <p>Project 4</p>
              </div>
            </a>

            <a class="grid-item item-5" href="https://www.google.com/">
              <div class="project-heading">
                <p>Project 5</p>
              </div>
            </a>

            <a class="grid-item item-6" href="https://msteele77.github.io/run-buddy/">
              <div class="project-heading">
                <p>Run Buddy</p>
              </div>
            </a>

          </div>
        </div>
      </article>

    </section>

  );
}

export default Project;