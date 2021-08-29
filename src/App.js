
import "./styles/styles.scss";

//Import Components
import React, { useState, useRef } from "react";
import Song from "./components/Song";
import Controls from "./components/Controls";
import ListOfSongs from "./components/ListOfSongs";

//Import data
import chillhop from "./data";
//Util

function App() {
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = (isPlaying, audioRef) => {
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then((audio) => {
            audioRef.current.play();
          })
          .catch((error) => console.log(error));
      }
    }
  };
  
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    playAudio(isPlaying, audioRef);
    return;
  };

  return (
    <div>
      <div className="player">
        <div className="player__inner">
          <Song  currentSong={currentSong} />

          <Controls
            currentSong={currentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />

          <ListOfSongs songs={songs} />
        </div>
      </div>

      <audio
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;

