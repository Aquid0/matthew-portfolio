import { useState } from 'react'
import './App.css'
import HomePanel from './components/HomePanel'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  return (
    <div className="flex justify-between gap-50">
      <div className="w-1/2 flex justify-center items-start pt-20 pl-50">
        <HomePanel />
      </div>

      <div className="w-3/4 pt-20">
        <div className="mb-20">
          <About />
        </div>
        <div className="mb-20">
          <Experience />
        </div>
        <div className="mb-20">
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default App
