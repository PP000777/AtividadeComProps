import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartaoUsuario from './components/CartaoUsuario'

function App() {
  return (       
    <div>
      <CartaoUsuario nome= "Pedro" email = "dwda@gmail.com" cargo = "inutil"  />      
    </div>
  )
}

export default App
