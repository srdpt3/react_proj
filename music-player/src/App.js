import React, { useState, useRef } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";

import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  //Ref
  const audioREf = useRef(null);

  //state
  const [songs, setSongs] = useState(data());
  const [currentSonng, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  return (
    <div className="App">
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      ></Nav>
      <Song currentSong={currentSonng}></Song>
      <Player
        audioREf={audioREf}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSonng}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        audioREf={audioREf}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      ></Library>
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioREf}
        src={currentSonng.audio}
      ></audio>
    </div>
  );
}

export default App;
