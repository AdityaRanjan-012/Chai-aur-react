import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1 );
      setCounter(prevCounter => prevCounter + 1);
      
     
      
    } else {
      console.log("Maximum limit reached");
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("Minimum limit reached");
    }
  }

  return (
    <> 
      <h1>Chai Aur React</h1> 
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>
        Add Value {counter}
      </button>
      <br />

      <button onClick={removeValue}>
        Remove Value {counter}
      </button> 
    </>
  )
}

export default App
