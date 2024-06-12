import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(15)

  const addValue = () => {
    console.log("clicked",counter);
    //counter= counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    console.log("clicked",counter);
    setCounter(counter - 1)
  }

  //let counter =5
  return (
    <>
      <h1>HI, it's my counter project</h1>
      <h2>counter value : {counter}</h2>

      <button
      onClick={addValue}>add value</button>
      <br />
      <button
      onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
