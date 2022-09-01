import { useState, useEffect } from "react";
import axios from 'axios';

const Entry = () => {

    const [songs, setSongs] = useState([]);
    const url = 'http://127.0.0.1:8000/music/';

    useEffect(() => {
      showAllSongs();
      
    }, []);
    
     function showAllSongs() {
      axios.get(url).then((response) =>
      setSongs(response.data))
      
    };

const deleteSong = (id) => {
  try{
    axios.delete(`http://127.0.0.1:8000/music/${id}`)
    .then(response => console.log(response))
  } catch (error) {
    console.log('try again')
  }
  
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
              <li>{song.likes}</li><button className="delete_button" onClick={() => deleteSong(song.id)}>Delete</button>
            </ul>
        
          </div>
        })}
      </div>
     );
}
 
export default Entry;