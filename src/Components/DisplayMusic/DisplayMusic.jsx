import { useEffect } from "react";
// import axios from "axios";
import Delete from "../Delete/Delete";

const DisplayMusic = (props) => {

  useEffect(() => {
    props.showAllSongs();
  }, []);


// showing a try catch
  // async function getAllSongs() {
  //   try {
  //     const response = await axios.get(url);
  //     props.setSongs(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // }

  return (
    // <ul>
    //   {props.songs.map(song=> <tr><song song={song}/></tr>)}
    // </ul>

    <div>
      {props.songs.map((song) => {
        return (
          <div>
            <ul key={song.id}>
              <li>{song.title}</li>
              <li>{song.artist}</li>
              <li>{song.album}</li>
              <li>{song.release_date}</li>
              <li>{song.genre}</li>
              <li>{song.likes}</li>
              <Delete id={song.id} showAllSongs={props.showAllSongs} />
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayMusic;
