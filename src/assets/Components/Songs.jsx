import React, { useState } from "react";

import AddSong from "./AddSong";
import "./songs.css";

function Songs() {
  const [songs, setSongs] = useState([
    { id: 1, songName: "Star Boy" },
    { id: 2, songName: "All The Stars" },
    { id: 3, songName: "The Neigbourhood" },
  ]);
  const addSong = (userInput) => {
    setSongs([...songs, { id: 4, songName: userInput }]);
  };
  return (
    <div className="">
      <h1 className="heading">Make Your Own PlayList !</h1>
      <hr />


      <AddSong newList={addSong}/>

      <ul className="container">
        {songs.map((song) => (
          <h2 className="songs">{song.songName}</h2>
        ))}
      </ul>
      
    </div>
  );
}

export default Songs;
