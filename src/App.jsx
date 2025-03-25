import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './sections/About';

function App() {
  return (
    <div>
      <NavBar />
      <Header />

      <div className="flex flex-col items-center justify-center mt-40 mr-40">
        <About />
      </div>
    </div>
  );
}

export default App;
