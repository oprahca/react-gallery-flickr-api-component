// TreeHouse Techdegree Project 8 - React Gallery APP (Component)
// https://github.com/lcchand/Project_11-React-Flickr-Gallery
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Search from "./Components/Search";
import Airplane from "./Components/Airplane";
import Train from "./Components/Train";
import Automobile from "./Components/Automobile";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Airplane query='supercar' />} />
        <Route path="/search" element={<Search />} />
        <Route path="/Airplane" element={<Airplane query='airplane' />} />
        <Route path="/Train" element={<Train query='train' />} />
        <Route path="/Automobile" element={<Automobile query='automobile' />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
