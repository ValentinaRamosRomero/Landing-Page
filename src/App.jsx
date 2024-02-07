import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <div className='encabezado'>
        <img className='imagen-encabezado' src='../public/Wallet logo.png' />
        <nav className='navegacion-encabezado'>
          <p>Sign up</p>
          <button className='boton-encabezado'>Log in</button>
        </nav>

      </div>

    </body>
  )
}

export default App
