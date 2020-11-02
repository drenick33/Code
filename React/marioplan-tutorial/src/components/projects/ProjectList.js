import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = (props) => {
  return (
    <div className="project-list section">
      <ProjectSummary projects={props.projects}></ProjectSummary>
    </div>
  );
};

export default ProjectList;
