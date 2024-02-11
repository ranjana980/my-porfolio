import "./App.css";
import Navbar from "./componnets/navbar";
import { useRef } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetails from "./componnets/blogs/blog-details";
import PortFolioPage from "./componnets/main-home-page";

function App() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  return (
    <>
      <Navbar
        home={ref}
        resume={ref1}
        projects={ref2}
        blogs={ref3}
        contact={ref4}
      />
      <BrowserRouter>
        <Routes>
        <Route index path="/" element={<PortFolioPage />} />
          <Route path="/blog/:technology/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
