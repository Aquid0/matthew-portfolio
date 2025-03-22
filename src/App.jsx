import { useState } from 'react'
import './App.css'
import HomePanel from './components/HomePanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <HomePanel />
    </>
  )
}

export default App
