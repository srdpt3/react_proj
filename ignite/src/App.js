import React, { useEffect } from "react";

import { loadGames } from "./actions/gamesActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div className="App">
      <h1>dfasdf</h1>
    </div>
  );
}

export default App;
