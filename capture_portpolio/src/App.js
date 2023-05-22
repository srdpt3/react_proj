import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <Routes>
        <Route path="/" exaxt element={<AboutUs />}></Route>
        <Route path="/aboutus" exaxt element={<AboutUs />}></Route>
        <Route path="/work" exaxt element={<OurWork />}></Route>
        <Route path="/work/:id" exaxt element={<MovieDetail />}></Route>
        <Route path="/contactus" exaxt element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
