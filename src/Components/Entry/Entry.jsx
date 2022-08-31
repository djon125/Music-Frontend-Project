import { useState, useEffect } from "react";
import axios from 'axios';

const Entry = () => {

    const [songs, setSongs] = useState([]);
    const url = 'http://127.0.0.1:8000/music/';

    useEffect(() => {
        axios.get(url).then((response) =>
        setSongs(response.data))


    }, []);


const getAllSongs = async () => {
    try {
        const response = await axios(url);
        console.log(response.data);
    } catch (error) {
        console.log(error.response)
    }

};

    return ( 
        <div>
        <button onClick={() => getAllSongs()}>Get All Songs</button>

        {songs.map((song) => {
          return <div>
            <ul>
              <li>{song.title}</li>
              <li>{song.artist}</li>
              <li>{song.album}</li>
              <li>{song.release_date}</li>
              <li>{song.genre}</li>
              <li>{song.likes}</li>
            </ul>
        
          </div>
        })}
      </div>
     );
}
 
export default Entry;