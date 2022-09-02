import React, { useState, useEffect } from 'react';
// import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import './App.css';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import Post from './Components/Post/Post';
import "./App.css";
import axios from 'axios';
import Song from './Components/Song/Song';

function App() {


  const [songs, setSongs] = useState([]);
  const url = 'http://127.0.0.1:8000/music/';
  function showAllSongs() {
    axios.get(url).then((response) => setSongs(response.data));
  }
  
  // const [posts, setPosts] = useState([])
 
  // function addNewPost(post) {
  //   let tempPost = [...posts, post];
  //   setPosts(tempPost);
  // }

  return (
<div>
  <h1>music Frontend</h1>
  <Post showAllSongs={showAllSongs}/>
  <DisplayMusic songs={songs} showAllSongs={showAllSongs} song={Song}/>
</div>
  );
}

export default App;
