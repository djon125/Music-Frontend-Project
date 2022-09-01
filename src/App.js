// import React, { useState } from 'react';
// import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import './App.css';
import Entry from './Components/Entry/Entry';
import Post from './Components/Post/Post';
import "./App.css";

function App() {
  
  
  // const [posts, setPosts] = useState([])
 
  // function addNewPost(post) {
  //   let tempPost = [...posts, post];
  //   setPosts(tempPost);
  // }

  return (
<div>
  <h1>music Frontend</h1>
  <Post />
  <Entry />
</div>
  );
}

export default App;
