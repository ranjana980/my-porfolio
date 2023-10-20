import "./App.css";
import Navbar from "./componnets/navbar";
import { useRef, useState } from "react";
import Projects from "./componnets/projects";
import Home from "./componnets/home";
import Resume from "./componnets/resume";
import Contact from "./componnets/contact";
import AlertComponent from "./common/alert";
import Blog from "./componnets/blog";

function App() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [message, setMessage] = useState({});

  const handleNotify = (type, message) => {
    setIsOpenAlert(!isOpenAlert);
    setMessage({ type: type, message: message });
  };

  return (
    <>
      <Navbar
        home={ref}
        resume={ref1}
        projects={ref2}
        blogs={ref3}
        contact={ref4}
      />
      <div ref={ref}>
        <Home />
      </div>
      <div ref={ref3}>
        <Blog />
      </div>
      <div ref={ref1}>
        <Resume />
      </div>
      <div ref={ref2}>
        <Projects />
      </div>
      <div ref={ref4}>
        <Contact handleNotify={handleNotify} />
      </div>
      {isOpenAlert && (
        <AlertComponent
          isOpen={isOpenAlert}
          message={message}
          setIsOpenAlert={setIsOpenAlert}
        />
      )}
    </>
  );
}

export default App;
