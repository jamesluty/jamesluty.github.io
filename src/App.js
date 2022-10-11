import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
