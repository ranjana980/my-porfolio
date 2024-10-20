import "./App.css";
import Navbar from "./componnets/navbar";
import { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetails from "./componnets/blogs/blog-details";
import PortFolioPage from "./componnets/main-home-page";
import ProjectListing from "./componnets/project-listing";

function App() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  return (
    <>
      <BrowserRouter>
        <Navbar
          home={ref}
          resume={ref1}
          projects={ref2}
          blogs={ref3}
          contact={ref4}
        />
        <Routes>
          <Route index path="/" element={<PortFolioPage ref={ref} ref3={ref3} ref1={ref1} ref2={ref2} ref4={ref4} />} />
          <Route path="/blog/:technology/:id" element={<BlogDetails />} />
          <Route path="/projects" element={<ProjectListing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
