import React from 'react';
import './DropDownOptions.css';
import { useHistory } from 'react-router';

function DropDownOptions() {
  let history = useHistory();
  function redirect(e) {
    history.push(e.target.value);
  }

  return (
    <select
      className="selectpicker drop"
      data-style="btn-primary"
      onChange={redirect}
    >
      <option value="/" onClick={() => redirect('/')}>
        Home
      </option>
      <option value="/boardform">Make Board</option>
      <option value="/taskform">Make Task</option>
    </select>
  );
}

export default DropDownOptions;
