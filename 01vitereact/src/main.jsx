import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
      
    </div>
  )
}

/* const reactElement =  {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me  to go to Google'
} */

const anotheruser =  "Aditya Ranjna"
const reactElement = React.createElement (
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank',
    },
    'Click me  to go to Google',
    anotheruser
    
)



const anotherReactElement =  (
    <a href="https://www.google.com" target="_blank">
        Visit Google
    </a>
)


createRoot(document.getElementById('root')).render(

    reactElement
  
)
