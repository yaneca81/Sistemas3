import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ListarRoles } from './componentes/Roles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListarRoles/>
    </>
  )
}

export default App
