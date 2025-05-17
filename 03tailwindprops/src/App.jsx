import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    name: "Aditya Ranjan",
    age: 23,
    location: "India",
    hobbies: ["coding", "reading", "gaming"],
  }
  let myArray = [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-lg shadow-lg">
        Tailwind test
      </h1>
      <Card username="Chai-aur-code" btnText = "Visit me "/>
      <Card username="Aditya"  />
      
      
    </>
  )
}

export default App
