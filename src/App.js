import React, { useState, useEffect } from 'react';
// import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import './App.css';
import Entry from './Components/Entry/Entry';
import Post from './Components/Post/Post';
function App() {

  // const [post, setPost] = useState([]);
  // function addNewPost(post) {
  //   let tempPost = [...post, post];

  //   setPost(tempPost);
  // }


  return (
<div>
  <h1>music Frontend</h1>
  {/* <DisplayMusic /> */}
  <Post />
  <Entry />
</div>
  );
}

export default App;
