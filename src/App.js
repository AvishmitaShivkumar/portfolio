import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from './Components/GlobalStyle';
import Navigation from './Components/Navigation/Navigation';
import Contact from "./Components/Contact/Contact"
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Home from './Components/Home/Home';


function App() {
  
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navigation/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/projects" element={ <Projects/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/contact" element={ <Contact/> }/> 
      </Routes>
    </BrowserRouter>
    

    
  );
}

export default App;
