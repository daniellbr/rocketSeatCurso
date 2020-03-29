import React from 'react';
import Header from './Header';

function App() {
  let counter = 0;

  function increment(){
    counter +=1;

    console.log(counter)
  }  
  return (
   <div>
     <header>Contador {counter}</header>
     <button onClick={increment}>Incrementar</button>
   </div>
  );
}

export default App;
