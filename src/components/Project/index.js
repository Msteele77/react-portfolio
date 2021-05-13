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

          <div class="prepper">
          <div class="project-heading"><p>Minimal Prepper</p></div>
              <div class="links">
                <a class="deployed-link" href="https://minimal-prepper.herokuapp.com/">Deployed Application</a>
                <a class="github-link" href="https://github.com/daniwhitlock/the-minimal-prepper">GitHub</a>
              </div>
              </div>

            <div class="grid-item prepper-img"
              style={{
                backgroundImage: `url(${minimalPrepper})`,
                opacity: 0.5
              }}>
            </div>

            <div class="eats-heading">
            <div class="project-heading"><p >Eats N Such</p></div>
              <div class="links">
                <a class="deployed-link" href="https://msteele77.github.io/run-buddy/">Deployed Application</a>
                <a class="github-link" href="https://msteele77.github.io/Eats-n-such/">GitHub</a>
              </div>
              </div>

            <div class="grid-item eats-img"
              style={{
                backgroundImage: `url(${eatsNSuch})`,
                opacity: 0.5
              }}>
             
            </div>

              <div class="budget-heading">
            <div class="project-heading"><p >Budget Tracker</p></div>
              <div class="links">
                <a class="deployed-link" href="https://nameless-atoll-84120.herokuapp.com/">Deployed Application</a>
                <a class="github-link" href="https://github.com/Msteele77/budget-tracker">GitHub</a>
              </div>
              </div>

            <div class="grid-item budget-img"
              style={{
                backgroundImage: `url(${budgetTracker})`,
                opacity: 0.5
              }}>
              
            </div>


              <div class="scheduler-heading">
            <div class="project-heading"><p >Scheduler</p></div>
              <div class="links">
                <a class="deployed-link" href="https://msteele77.github.io/scheduler/">Deployed Application</a>
                <a class="github-link" href="https://github.com/Msteele77/scheduler">GitHub</a>
              </div>
              </div>

            <div class="grid-item scheduler-img"
              style={{
                backgroundImage: `url(${workDayScheduler})`,
                opacity: 0.5
              }}>
            </div>

              <div class="note-heading">
            <div class="project-heading"><p>Note Taker</p></div>
              <div class="links">
                <a class="deployed-link" href="https://miniature-eureka.herokuapp.com/">Deployed Application</a>
                <a class="github-link" href="https://github.com/Msteele77/miniature-eureka">GitHub</a>
              </div>
              </div>

            <div class="grid-item note-img"
              style={{
                backgroundImage: `url(${noteTaker})`,
                opacity: 0.5
              }}>
              
            </div>

              <div class="artstagram-heading">
            <div class="project-heading"><p >Artstagram</p></div>
              <div class="links">
                <a class="deployed-link" href="https://github.com/pilar122/Artstagram">Deployed Application</a>
                <a class="github-link" href="https://github.com/pilar122/Artstagram">GitHub</a>
              </div>
              </div>

            <div class="grid-item art-img"
              style={{
                backgroundImage: `url(${artstagram})`,
                opacity: 0.5
              }}>
             
            </div>

          </div>
        </div>
      </article>

    </section >

  );
}

export default Project;