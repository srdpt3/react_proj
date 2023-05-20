import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";

import data from "./data";

function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSonng, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSonng}></Song>
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSonng}
      />
    </div>
  );
}

export default App;
