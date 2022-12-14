import { useState } from "react";
import axios from 'axios';


const Post = (props) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setRelease_date] = useState('');
    const [genre, setGenre] = useState('');

    const url = 'http://127.0.0.1:8000/music/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        };
        addPost(newPost);
    };
    


    // async function addPost (newPost){
    //     const response = await axios.post(url, newPost);
    //     console.log(response.data);
    //     props.showAllSongs();
    // };

   async function addPost (newPost){
    try {
        const response =  await axios.post(url, newPost);
        console.log(response.data);
        props.showAllSongs();
    } catch (error) {
        console.log('try again')
    }
};





    return ( 

        <form className="poster" onSubmit={handleSubmit}>
            <div className="title">
                <label className="l_title">Title: </label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div className="artist">
                <label className="l_artist">Artist: </label>
                <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div className="album">
                <label className="l_album">Album: </label>
                <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div className="release_date">
                <label className="l_release_date">Release Date: </label>
                <input type="date" value={release_date} onChange={(event) => setRelease_date(event.target.value)}/>
            </div>
            <div className="genre">
                <label className="l_genre">Genre: </label>
                <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)}/>
                <button className="l_button" >Create Song</button>
            </div>

        </form>
     );
}
 
export default Post;