import { useState } from 'react'

import './App.css'

function App() {
  // If using Vite, make sure to declare the env property in vite-env.d.ts
  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
      <h1>A blog app  with Appwrite</h1>
    </>
  )
}

export default App
