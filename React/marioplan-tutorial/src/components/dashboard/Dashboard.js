import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

const Dashboard = (props) => {
  console.log(props);
  const { projects } = props; //destructuring
  console.log(projects);

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={props.projects}></ProjectList>
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications></Notifications>
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStatetoProps)(Dashboard);
