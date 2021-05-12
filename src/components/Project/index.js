import React from 'react';
import budgetTracker from "../../assets/images/budget-tracker.png";
import artstagram from "../../assets/images/artstagram.png";
import eatsNSuch from "../../assets/images/eats-n-such.png";
import minimalPrepper from "../../assets/images/minimal-prepper.png";
import noteTaker from "../../assets/images/note-taker.png";
import workDayScheduler from "../../assets/images/work-day-scheduler.png";

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
              <div class="project-heading"><p>Minimal Prepper</p></div>
              
              <a class="deployed-link" href="https://minimal-prepper.herokuapp.com/">Deployed Application</a>
              <a class="github-link" href="https://github.com/daniwhitlock/the-minimal-prepper">GitHub</a>
            </div>

            <div class="grid-item item-2">
              <div class="project-heading"><p >Eats N Such</p></div>
              
              <a class="deployed-link" href="https://msteele77.github.io/run-buddy/">Deployed Application</a>
              <a class="github-link" href="https://msteele77.github.io/Eats-n-such/">GitHub</a>
            </div>

            <div class="grid-item item-3">
              <div class="project-heading"><p >Budget Tracker</p></div>
              
              <a class="deployed-link" href="https://nameless-atoll-84120.herokuapp.com/">Deployed Application</a>
              <a class="github-link" href="https://github.com/Msteele77/budget-tracker">GitHub</a>
            </div>

            <div class="grid-item item-4">
              <div class="project-heading"><p >Work Day Scheduler</p></div>
              
              <a class="deployed-link" href="https://msteele77.github.io/scheduler/">Deployed Application</a>
              <a class="github-link" href="https://github.com/Msteele77/scheduler">GitHub</a>
            </div>

            <div class="grid-item item-5">
              <div class="project-heading"><p>Note Taker</p></div>
              
              <a class="deployed-link" href="https://miniature-eureka.herokuapp.com/">Deployed Application</a>
              <a class="github-link" href="https://github.com/Msteele77/miniature-eureka">GitHub</a>
            </div>

            <div class="grid-item item-6">
              <div class="project-heading"><p >Artstagram</p></div>
              
              <a class="deployed-link" href="https://github.com/pilar122/Artstagram">Deployed Application</a>
              <a class="github-link" href="https://github.com/pilar122/Artstagram">GitHub</a>
            </div>
            

        </div>
        </div>
      </article>

    </section >

  );
}

export default Project;