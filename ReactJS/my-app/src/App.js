import React from 'react';
import Header from './Header';
import Footer from './Footer';


function App() {
  const x = 6; 
  const menu = [
    "Hello",
    "World"
  ]
  return (
    <div className="App">
      <Header somenumber={x} test={menu}/>
      hello123
      <Footer/>
    </div>
  );
}

export default App;
