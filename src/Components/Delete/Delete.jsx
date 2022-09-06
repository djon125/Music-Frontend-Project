import axios from "axios";
// import showAllSongs from "../DisplayMusic/DisplayMusic";



const Delete = (props) => {
    
    
    async function deleteSong() {
        const response = await axios.delete(`http://127.0.0.1:8000/music/${props.id}/`);
        console.log(response.data)
        props.showAllSongs();
    }


    return ( 
        <button className="del" onClick={deleteSong}>Delete Song</button>
     );
}
 
export default Delete;