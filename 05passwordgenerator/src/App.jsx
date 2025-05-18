import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?/"

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        passwordGenerator()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [passwordGenerator])

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className='w-full max-w-md shadow-md rounded-lg px-4 py-6 bg-gray-900 text-orange-500'>
        <h1 className='text-white text-center text-3xl font-bold mb-6'>Password Generator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='w-full px-4 py-2 text-gray-900 bg-gray-200'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            onClick={copyPasswordToClipboard}
            onFocus={() => passwordRef.current.select()}
          />
          <button
            className='px-4 py-2 bg-orange-500 text-white'
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label htmlFor="length" className="text-white">Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
              className='cursor-pointer'
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              id="charInput"
              checked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
              className='cursor-pointer'
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
