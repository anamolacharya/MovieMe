import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';
import "../css/Banner.css";


function Banner(){

    const [movie, setMovie] = useState([]);
    useEffect (() => {
        //async function makes cool with external API, 
        async function fetchData(){
            const request = await axios.get(requests.fetchNetfllixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random()* request.data.results.length-1)
            ]);   // This creates 1 random movie banner using random generator taken from the pool of array of Netflix Original        
        }
        fetchData();

    }, []);

    console.log(movie);

    //This function limits the movie description in the banner with limited characters
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        //This will create the space for the banner and style the banner accordingly
        <header className = "banner"
            style = {{
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie ?.backdrop_path}"
                )`
            }}
        >
            <div className = "banner_contents">
                 <h1 className = "banner_title">
                     {movie?.title || movie?.name || movie?.original_name}
                 </h1>
                 
            <div className = "banner_buttons">
                <button className = "banner_button">Play</button>
                <button className = "banner_button">My List</button>

            </div>
            <h1 className = "banner_description">
                {truncate(movie?.overview,165)}
            </h1>
            
           

            </div>
            <div className = "banner_fadeBottom" />
        </header>
    )
}
 export default Banner;