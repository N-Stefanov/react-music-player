
import "./styles/styles.scss";

//Import Components
import React, { useState, useRef } from "react";
import Song from "./components/Song";
import Player from "./components/Player";

//Import data
import chillhop from "./data";
//Util

function App() {
  const [songs, setsongs] = useState(chillhop());
  const [curentSong, setcurentSong] = useState(songs[0]);

  return (
    <div>
      <Song  curentSong={curentSong} />

      <Player curentSong={curentSong} />

      {console.log(songs)}
    </div>
  );
}

export default App;

