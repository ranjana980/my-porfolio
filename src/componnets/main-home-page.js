import { Home } from "@material-ui/icons";
import React, { useState } from "react";
import Blog from "./blog";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";
import AlertComponent from "./../common/alert";

export default function PortFolioPage({ ref, ref3, ref1, ref2, ref4 }) {
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [message, setMessage] = useState({});

  const handleNotify = (type, message) => {
    setIsOpenAlert(!isOpenAlert);
    setMessage({ type: type, message: message });
  };

  return (
    <>
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
