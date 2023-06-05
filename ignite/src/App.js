import React, { useEffect } from "react";

import { loadGames } from "./actions/gamesActions";
import { useDispatch } from "react-redux";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
