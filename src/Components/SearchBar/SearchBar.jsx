import React, { useState } from 'react';

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    function searchSongs(event){
        event.preventDefault();
        const response = props.songs.filter((song) => {
           if(song.title.includes(searchTerm) ||
             song.artist.includes(searchTerm) ||
             song.album.includes(searchTerm) ||
             song.release_date.includes(searchTerm) ||
             song.genre.includes(searchTerm)) {
                return true;
             } else{
                return false;
             }
        });
        props.setSongs(response);
    }

    return ( 
        <form onSubmit={searchSongs}>
            <input placeholder='Search Movies' type='text' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            <button type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;