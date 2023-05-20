export const playAudio = (isPlaying, audioREf) => {
  if (isPlaying) {
    const playPromise = audioREf.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioREf.current.play();
      });
    }
  }
};
