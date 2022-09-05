import React, { useState } from 'react';
// import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import './App.css';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import Post from './Components/Post/Post';
import "./App.css";
import axios from 'axios';
// import Song from './Components/Song/Song';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {


  const [songs, setSongs] = useState([]);
  const url = 'http://127.0.0.1:8000/music/';
  function showAllSongs() {
    axios.get(url).then((response) => {setSongs(response.data); console.log(response.data)});
  }
  


  return (
<div>
  <h1>Music Frontend</h1>
  <SearchBar songs={songs} setSongs={setSongs}/><button className="b1"onClick={showAllSongs}>Show All Songs</button>
  
  <Post showAllSongs={showAllSongs}/>
  <DisplayMusic songs={songs} showAllSongs={showAllSongs} setSongs={setSongs}/>
</div>
  );
}



export default App;



//move show all songs to top next to filter!!!!!!!!