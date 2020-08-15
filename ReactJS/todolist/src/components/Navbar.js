import { Calendar } from 'react-bootstrap-icons';
import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark shadow">
        <Calendar color="white" size="32px" className=""></Calendar>
      </nav>
    </div>
  );
}

export default Navbar;
