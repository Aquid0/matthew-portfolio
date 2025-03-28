import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './sections/About/About';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div>
      <CustomCursor />
      <NavBar />
      <Header />

      <div className="mt-40 mr-40 flex flex-col items-center justify-center">
        <About />
      </div>
    </div>
  );
}

export default App;
