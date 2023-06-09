import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { playAudio } from "../Util";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioREf,
  setIsPlaying,
  isPlaying,
  currentSong,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioREf.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioREf.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    // playAudio(isPlaying, audioREf);
    if (isPlaying) {
      audioREf.current.play();
    }
  };
  const dragHandler = (e) => {
    audioREf.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    } else {
      await setCurrentSong(
        songs[(currentIndex - 1 + songs.length) % songs.length]
      );
      activeLibraryHandler(
        songs[(currentIndex - 1 + songs.length) % songs.length]
      );
    }
    // playAudio(isPlaying, audioREf);
    if (isPlaying) {
      audioREf.current.play();
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  // Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          ></input>

          <div style={trackAnim} className="animate-track"></div>
        </div>

        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipTrackHandler("skip-back")}
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipTrackHandler("skip-forward")}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Player;
