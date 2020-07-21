import React, { useState} from 'react';




function Header(props) {


  const [counter, setCounter] = useState(10);

  const plus = () => {
    setCounter(counter + 1);
    console.log("Clicked", counter);
    
  }
  
  const minus = () => {
    setCounter(counter - 1);
    console.log("Minus");
  }

  return (
    <div className="Header">
      Header 
      {props.somenumber}
      <ol>
      {props.test.map(el => <li>{el}</li>)}
      </ol>

      <button onClick ={minus}>-</button>
      {counter}
      <button onClick ={plus} >+</button>



    </div>
  );
}

export default Header;
