import React from 'react';
import './DropDownOptions.css';
import { useHistory } from 'react-router';
import { get } from 'lodash';

const BoardSelect = (props) => {
  let history = useHistory();

  function redirect(e) {
    console.log('run redirect');
    history.push('/board' + e.target.value);
  }

  return (
    <select
      className="selectpicker drop"
      data-style="btn-primary"
      onChange={redirect}
    >
      {get(props, 'boards', []).map((el) => (
        <option value={'/' + el._id} key={el._id}>
          {el.title}
        </option>
      ))}
    </select>
  );
};

export default BoardSelect;
