import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ setIsPlaying, isPlaying, currentSong }) => {
  const audioREf = useRef(null);

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

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  const dragHandler = (e) => {
    audioREf.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        ></input>
        <p>{getTime(songInfo.duration)}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
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
        ></FontAwesomeIcon>
      </div>
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioREf}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
