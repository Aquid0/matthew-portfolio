import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './sections/About';
import CustomCursor from './components/CustomCursor';
function App() {
  return (
    <div>
      <CustomCursor />
      <NavBar />
      <Header />

      <div className="flex flex-col items-center justify-center mt-40 mr-40">
        <About />
      </div>
    </div>
  );
}

export default App;
