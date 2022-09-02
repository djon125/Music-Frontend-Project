import { useState, useEffect } from "react";
import axios from 'axios';
import Delete from "../Delete/Delete";

const DisplayMusic = (props) => {

    const [songs, setSongs] = useState([]);
    const url = 'http://127.0.0.1:8000/music/';

    useEffect(() => {
      showAllSongs();
      
    }, []);
    
     function showAllSongs() {
      axios.get(url).then((response) =>
      setSongs(response.data))
      
    };




async function getAllSongs() {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.log(error.response)
    }

};

    return ( 
        <div>
        <button onClick={() => getAllSongs()}>Get All Songs</button>
        <button onClick={() => showAllSongs()}>Show All Songs</button>
        <form className="update_delete">
          <div>
            <label className="update">Update</label>
            <input />
            <label className="delete">Delete</label>
            <input />
          </div>
        </form>
        
        <button>Update</button><button>Delete</button>
        {songs.map((song) => {
          return <div>
            <ul key={song.id}>
              <li>{song.title}</li>
              <li>{song.artist}</li>
              <li>{song.album}</li>
              <li>{song.release_date}</li>
              <li>{song.genre}</li>
              <li>{song.likes}</li><Delete id={song.id} showAllSongs={showAllSongs}/>
            </ul>
        
          </div>
        })}
      </div>
     );
}
 
export default DisplayMusic;