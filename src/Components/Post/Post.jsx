import { useState } from "react";
import axios from 'axios';

const Post = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setRelease_date] = useState('');
    const [genre, setGenre] = useState('');

    const url = 'http://127.0.0.1:8000/music/';

    const handleSubmit = (event) => {
        event.preventDefault();
        addPost();
    };
    
   function addPost (){
    try {
        const response =  axios.post(url, {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        });
        console.log(response);
    } catch (error) {
        console.log('try again')
    }};





    return ( 

        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div>
                <label>Artist</label>
                <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div>
                <label>Album</label>
                <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div>
                <label>Release Date</label>
                <input type="date" value={release_date} onChange={(event) => setRelease_date(event.target.value)}/>
            </div>
            <div>
                <label>Genre</label>
                <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)}/>
                <button type='submit'>Create Song</button>
            </div>

        </form>
     );
}
 
export default Post;