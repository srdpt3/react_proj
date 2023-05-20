import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  audioREf,
  songs,
  setCurrentSong,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioREf={audioREf}
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            id={song.id}
            isPlaying={isPlaying}
            setSongs={setSongs}
          ></LibrarySong>
        ))}
      </div>
    </div>
  );
};
export default Library;
