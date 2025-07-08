import { useState } from 'react'
import './App.css'
import BuscarJogos from './components/BuscarJogos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BuscarJogos/>
    </>
  )
}

export default App