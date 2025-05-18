import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
     <div className='w-full h-screen duration-200'
     style={{backgroundColor: color}}

     >
      <div className='fixed flex felx-wrap
      
      justify-center bottom-12 inset-x-0 
      px-2'>

        <div className='flex felx-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'> 
        <button
        onClick={() => setColor("red")}
        className="outline-none px-4 text-white py-2 rounded-full shadow-lg"
        style={{backgroundColor: "red"}}>
        Red</button>

        <button
        onClick={() => setColor("green")}
        className="outline-none px-4 text-white py-2 rounded-full shadow-lg"
        style={{backgroundColor: "green"}}>
        Green</button>

        <button
        onClick={() => setColor("blue")}
        className="outline-none px-4 text-white py-2 rounded-full shadow-lg"
        style={{backgroundColor: "Blue"}}>
        Blue</button>

        <button
        onClick={() => setColor("aqua")}
        className="outline-none px-4 text-white py-2 rounded-full shadow-lg"
        style={{backgroundColor: "Aqua"}}>
        Aqua</button>

        <button
        onClick={() => setColor("yellow")}
        className="outline-none px-4 text-white py-2 rounded-full shadow-lg"
        style={{backgroundColor: "yellow"}}>
        Yellow</button>

        <button
        onClick={() => setColor("pink")}
        className="outline-none px-4 text-white py-2 rounded-full shadow-lg"
        style={{backgroundColor: "pink"}}>
        Pink</button>
        
        </div>
      </div>

     </div>
    </>
  )
}

export default App
