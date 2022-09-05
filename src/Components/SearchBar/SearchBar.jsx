import React, { useState } from 'react';

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    function searchSongs(event){
        event.preventDefault();
        const response = props.songs.filter((song) => {
           if(song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
             song.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
             song.release_date.includes(searchTerm) ||
             song.genre.toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
             } else{
                return false;
             }
        });
        props.setSongs(response);
    }

    return ( 
        <div>
        <form onSubmit={searchSongs}>
            <input placeholder='Search Movies' type='text' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            <button className="b2" type='submit'>Search Library</button>
        </form>


        </div>
     );
}
 
export default SearchBar;