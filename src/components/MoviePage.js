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

  const API = "343f6c9f5dmsh4866102b7bb0306p113e69jsn7eefe752434e";
  const Host = "movie-database-imdb-alternative.p.rapidapi.com";

  // const fetchIMDB =
  //   `https://movie-database-imdb-alternative.p.rapidapi.com/?i=${movie.imdb_id}` +
  //   "&rapidapi-key=" +
  //   API +
  //   "&rapidapi-host=" +
  //   Host;
  // const fetchIMDB = {
  //   method: "GET",
  //   url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
  //   params: { i: "tt3717532", r: "json" },
  //   headers: {
  //     "x-rapidapi-key": "343f6c9f5dmsh4866102b7bb0306p113e69jsn7eefe752434e",
  //     "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
  //   },
  // };

  const fetchIMDB = {
    method: "GET",
    url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
    params: { i: `${movie.imdb_id}`, r: "json" },
    headers: {
      "x-rapidapi-key": "343f6c9f5dmsh4866102b7bb0306p113e69jsn7eefe752434e",
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    },
  };

  axios
    .request(fetchIMDB)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  //This useEffect helps to get the data from the API
  useEffect(() => {
    //if the bracket is blanck [], it will run once and do not run again
    async function fetchData() {
      const request = await axios.get(fetchURL);
      const imageRequest = await axios.get(fetchImageURL);
      const streamProviderRequest = await axios.get(fetchWatchProvider);
      //const IMDBRequest = await axios.get(fetchIMDB);

      // console.log(streamProviderRequest);

      setMovie(request.data);
      setImage(imageRequest.data);
      setWatchProvider(streamProviderRequest.data);
      setImdb(fetchIMDB.data);
      //console.log(imageRequest.data);
      setLoaded(true);
      //console.log("ImageURL: " + image.backdrops[0])
      return request;
    }
    fetchData();
  }, [fetchURL]);

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
  } else {
    return (
      <div>
        <img
          className="background_image"
          src="https://user-images.githubusercontent.com/55467685/115977981-35903580-a542-11eb-8cb7-06ddc3b5335e.png"
          alt="bg-image"
        />
        <div>
          <h1 className="about-us-header"> {movie.title}</h1>
          <h1 className="overview_text"> {movie.homepage}</h1>
          <h1 className="stream_text">Streaming Options:</h1>
          <p className="stream_provider">
            {watchProvider.results.US.rent.map((x) => {
              return x.provider_name;
            })}
          </p>
          <h1 className="IMDB_text">IMDB Rating : {imdb.Year}</h1>
          <h1 className="favorite_text">Favorite this: </h1>
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
