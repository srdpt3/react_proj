import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

import { Routes, Route, useLocation } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" exaxt element={<AboutUs />}></Route>
          <Route path="/aboutus" exaxt element={<AboutUs />}></Route>
          <Route path="/work" exaxt element={<OurWork />}></Route>
          <Route path="/work/:id" exaxt element={<MovieDetail />}></Route>
          <Route path="/contactus" exaxt element={<ContactUs />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
