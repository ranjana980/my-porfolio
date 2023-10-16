


import React,{ useRef } from 'react'; 
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

import About from './Components/About';

function App() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);



  return (
    <>
      <Navbar getHome={ref} getPortFolio={ref1} getContact={ref4} getAbout={ref2} getBlog={ref3} />
      <div ref={ref}><Home /></div>
      <div ref={ref1}><Resume /></div>
      <div ref={ref2}><About /></div>
      <div ref={ref4}><Contact /></div>
    </>
  );
}

export default App;
