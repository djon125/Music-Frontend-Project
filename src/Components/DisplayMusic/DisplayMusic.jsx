// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const DisplayMusic = (props) => {
   
//     const [songs, setSongs] =useState([]);

//     useEffect(() => {
//         getAllSongs();
//     }, []);
    
    
//     async function getAllSongs(){
//       const songresponse = await axios.get('http://127.0.0.1:8000/music/');
//       console.log(songresponse.data);
//       setSongs(songresponse.data)

//     }
   
   
//     return ( 
//         <div>
//         <button onClick={() => getAllSongs()}>Get All Songs</button>

//         {songs.map((song) => {
//           return <div>
//             <ul>
//               <li>{song.title}</li>
//               <li>{song.artist}</li>
//               <li>{song.album}</li>
//               <li>{song.release_date}</li>
//               <li>{song.genre}</li>
//               <li>{song.likes}</li>
//             </ul>
        
//           </div>
//         })}
//       </div>


     );
    }
 
export default DisplayMusic;




