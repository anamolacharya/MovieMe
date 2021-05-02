import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "../css/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import MoviePage from "../pages/MoviePagePage";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
} from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //This useEffect helps to get the data from the API
  useEffect(() => {
    //if the bracket is blanck [], it will run once and do not run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  const opts = {
    height: "380",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    //This will check if the trailer playing or not.
    //If it is playeing it will set trailerUrl empty string

    <Link className="nav-link" to="/moviepage"></Link>;
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      //Here, imported from npm module
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="rowsss">
      <h2>{title}</h2>
      <div className="row_posters">
        {/* Row POsters*/}
        {movies.map((movie) => (
          <img
            key={movie.id} //Any changes in row, it will just re render in the row.
            //onClick={ () => handleClick(movie)} //this will refer to the movie when a movie in the display is clicked
            onClick={(event) =>
              (window.location.href = `/moviepage/${movie.id}`)
            }
            className={`row_poster ${isLargeRow && "row_posterLarge"}`} //all of them are row_poster, except the row with large row.
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
export default Row;
