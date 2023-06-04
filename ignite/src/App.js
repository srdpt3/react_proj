import React, { useEffect } from "react";

import { loadGames } from "./actions/gamesActions";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
