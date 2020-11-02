import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

const CreateProject = (props) => {
  let [title, setTitle] = useState('');
  let [content, setContent] = useState('');

  const handleChange = (e) => {
    console.log(e);
    switch (e.target.id) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'content':
        setContent(e.target.value);
        break;
      default:
        console.log('no Id');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      props.createProject({ title, content });
      console.log({
        title,
        content,
      });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create New Project</h5>
      </form>
      <div className="input-field">
        <label htmlFor="title">title</label>
        <input value={title} type="text" id="title" onChange={handleChange} />
      </div>
      <div className="input-field">
        <label htmlFor="content">content</label>
        <textarea
          className="materialize-textarea"
          value={content}
          type="text"
          id="content"
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <button onClick={handleSubmit} className="btn pink lighten-1">
          Create
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
