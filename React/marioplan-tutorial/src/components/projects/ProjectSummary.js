import React from 'react';

const ProjectSummary = ({ projects }) => {
  return (
    <div>
      {projects &&
        projects.map((el) => (
          <div key={el.id} className="card z-depth=0 project-summary">
            <div key={el.id} className="card-content grey-text text-darken-3">
              <div key={el.id}>
                <span>{el.title}</span>
                <p>Posted by Dan</p>
                <p className="grey-text">January 27 2020, 7am</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectSummary;
