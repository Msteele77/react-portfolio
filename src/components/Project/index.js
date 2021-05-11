import React from 'react';
import budgetTracker from "../../assets/images/budget.png";

function Project (props) {
  
  const projects = {
    name:"Budget Tracker",
    description: "Budget Tracker Description"
  };

  return (
    
      <section>
            


            
            <div className="flex-row">
              <img
                src={budgetTracker}
                className="img-thumbnail mx-1"
                />
            </div>

               
      </section>
            
  );
}

export default Project;