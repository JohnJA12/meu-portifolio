
import './App.css';
import Navbar from './componentes/section/Navbar';
import Presentation from './componentes/section/Presentation';
import Footer from './componentes/section/Footer';
import Skills from './componentes/section/Skills';
import Projects from './componentes/section/Projects';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Presentation/>  
     <Skills/>
     <Projects/>
     <Footer/>
    </div>
  );
}

export default App;