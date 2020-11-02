import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus reprehenderit assumenda veniam officiis dignissimos,
            laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus
            doloribus iste illum dolorem vitae sint.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Sasha Renick</div>
          <div>January 27</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
