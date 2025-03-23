import { useState } from 'react'
import './App.css'
import HomePanel from './components/HomePanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <HomePanel />
      <div className="w-200 h-200 bg-red-500"></div>
    </div>
  )
}

export default App
