
import './App.css';
import Navbar from './components/navbar';
import { useRef } from 'react';
import Projects from './components/projects';
import Home from './components/home'
import Resume from './components/resume';
import Contact from './components/contact'


function App() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);



  return (
    <>
      <Navbar home={ref} portFolio={ref1} contact={ref4} about={ref2} blog={ref3} />
      <div ref={ref}><Home/></div>
      <div ref={ref1}><Resume /></div>
      <div ref={ref2}><Projects /></div>
      <div ref={ref4}><Contact /></div>
    </>
  );
}

export default App;
