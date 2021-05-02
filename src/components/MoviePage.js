import axios from "../axios";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import "../css/Footer.css";
import Row from "./Row";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
} from "react-router-dom";
import { checkPropTypes } from "prop-types";

function MoviePage() {
  const movieID = useParams().movieID;

  const [movie, setMovie] = useState([]);
  const [image, setImage] = useState([]);
  const [watchProvider, setWatchProvider] = useState([]);
  const [imdb, setImdb] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const fetchURL =
    "https://api.themoviedb.org/3/movie/" +
    movieID +
    "?api_key=6bc6187ce75ef23b68c83c1f02848597&language=en-US";
  const fetchImageURL =
    "https://api.themoviedb.org/3/movie/" +
    movieID +
    "/images?api_key=6bc6187ce75ef23b68c83c1f02848597";
  const fetchWatchProvider =
    "https://api.themoviedb.org/3/movie/" +
    movieID +
    "/watch/providers?api_key=6bc6187ce75ef23b68c83c1f02848597";
    let fetchIMDB = "";

  //This useEffect helps to get the data from the API
  useEffect(() => {
    //if the bracket is blanck [], it will run once and do not run again
    async function fetchData() {
      const request = await axios.get(fetchURL).then(response => {
        fetchIMDB =
        "http://www.omdbapi.com/?i=" + response.data.imdb_id + "&apikey=513d661";
        setMovie(response.data);
      }

      );
      const imageRequest = await axios.get(fetchImageURL);
      const streamProviderRequest = await axios.get(fetchWatchProvider);
      const IMDBRequest = await axios.get(fetchIMDB);


      setImage(imageRequest.data);
      setWatchProvider(streamProviderRequest.data);
      setImdb(IMDBRequest.data);

      setLoaded(true);

      return request;
    }
    fetchData();
  }, [fetchURL]);

  const handleFavorite = (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      movieID: movieID
    });

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    };

      fetch("http://localhost:8000/moviepage/"+movieID+"/favorite", requestOptions)
      .then(async (response) => {
        const responseData = await response.json();
        console.log(responseData);

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        } else {
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  
      
  }

  if (!loaded) {
    return (
      <h2
        style={{
          paddingTop: "85px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading
      </h2>
    );
  } else {console.log(movie.imdb_id);
    return (
      <div>
        <img
          className="background_image"
          src="https://user-images.githubusercontent.com/55467685/115977981-35903580-a542-11eb-8cb7-06ddc3b5335e.png"
          alt="bg-image"
        />
        <div>
          <h1 className="about-us-header"> {movie.title}</h1>
          <h1 className="overview_text"> {movie.overview}</h1>
          <h1 className="stream_text">Streaming Options in USA:</h1>
          <p className="stream_provider">
            {watchProvider.results.US.rent
              ? watchProvider.results.US.rent.map((x) => {
                  return x.provider_name;
                })
              : watchProvider.results.US.flatrate.map((y) => {
                  return y.provider_name;
                })}
          </p>
          {/* <h1 className="IMDB_text">IMDB Ratingss: {imdb.imdbRating}</h1> */}
          <h1 className="IMDB_text">
            IMDB Ratings:
            <a href={"https://imdb.com/title/"+movie.imdb_id}>{imdb.imdbRating}</a>
          </h1>

          <h1 className="favorite_text">Favorite this: <button onClick={handleFavorite}>Favorite</button></h1>
          <img
            className="movie_image"
            src={
              image.backdrops[0]
                ? "https://image.tmdb.org/t/p/w500" +
                  image.backdrops[0].file_path
                : ""
            }
          />
        </div>
        <div className="footer_position">
          <Footer />
        </div>
      </div>
    );
  }
}

export default MoviePage;
