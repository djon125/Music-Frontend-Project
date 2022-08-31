import { useState } from "react";
import axios from 'axios';

const Post = (props) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setRelease_date] = useState('');
    const [genre, setGenre] = useState('');
    //const [post, setPost] = useState([]);
    // const [likes, setLike] = useState('');
    const url = 'http://127.0.0.1:8000/music/';

    const handleSubmit = (event) => {
        event.preventDefault();
        addPost();
    };


    

    const addPost = (title, artist, album, release_date, genre) => {
        let postresponse = axios.post(url, {
            album: album,
            artist: artist,
            genre: genre,
            release_date: release_date,
            title: title,
        });
        console.log(postresponse);
        // props.addNewpost(postresponse)
        // setPost([postresponse.data, ...post]);
        // setTitle('');
        // setArtist('');
        // setAlbum('');
        // setRelease_date('');
        // setGenre('');

    }


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