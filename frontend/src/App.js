import React, {useState} from 'react';

import './global.css';

//import Header from './Header';
import Routes from './routes';
/*
function App() {
  const [counter, setCounter] = useState(0); // Retorna um array [valor da variavel, função para atualizar o valor da mesma]

  function increment() {
    setCounter(counter+ 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>   
  );
}*/


function App() {
  
  return (
    <Routes />  
  );
}
export default App;