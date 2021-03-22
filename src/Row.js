import React , {useState, useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]); 

    //This useEffect helps to get the data from the API  
    useEffect(() =>{

        //if the bracket is blanck [], it will run once and do not run again 
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    console.log(movies);


    return(
        <div className="row">
           <h2>{title}</h2>
            <div className= "row_posters">
                {/* Row POsters*/}

            {movies.map(movie =>(
            <img 
            key={movie.id} //Any changes in row, it will just re render in the row.
            className ={`row_poster ${isLargeRow && "row_posterLarge"}`} //all of them are row_poster, except the row with large row.
            src = {`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt = {movie.name}/>
            ))}

            </div>
            
        </div>
    )
}
export default Row;
