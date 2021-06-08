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

function MoviePage(props) {
  const movieID = useParams().movieID;
  const countryy = "US";

  const [movie, setMovie] = useState([]);
  const [image, setImage] = useState([]);
  const [watchProvider, setWatchProvider] = useState([]);
  const [imdb, setImdb] = useState([]);
  const [trailer, setTrailer] = useState([]);
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
  const fetchTrailer =
    "https://api.themoviedb.org/3/movie/" +
    movieID +
    "/videos?api_key=6bc6187ce75ef23b68c83c1f02848597&language=en-US";

  //This useEffect helps to get the data from the API
  useEffect(() => {
    //if the bracket is blanck [], it will run once and do not run again
    async function fetchData() {
      const request = await axios.get(fetchURL).then((response) => {
        fetchIMDB =
          "http://www.omdbapi.com/?i=" +
          response.data.imdb_id +
          "&apikey=513d661";
        setMovie(response.data);
      });
      const imageRequest = await axios.get(fetchImageURL);
      const streamProviderRequest = await axios.get(fetchWatchProvider);
      const IMDBRequest = await axios.get(fetchIMDB);
      const trailerRequest = await axios.get(fetchTrailer);

      setImage(imageRequest.data);
      setWatchProvider(streamProviderRequest.data);
      setImdb(IMDBRequest.data);
      setTrailer(trailerRequest.data);

      setLoaded(true);

      return request;
    }
    fetchData();
  }, [fetchURL]);

  const handleFavorite = (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      movieID: movieID,
    });

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    };

    fetch(
      "http://localhost:8000/moviepage/" + movieID + "/favorite",
      requestOptions
    )
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
  };

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
    console.log(movie.imdb_id);
    return (
      <div>
        <img
          className="background_image"
          src="https://user-images.githubusercontent.com/55467685/115977981-35903580-a542-11eb-8cb7-06ddc3b5335e.png"
          alt="bg-image"
        />
        <div>
          <h1 className="about-us-header"> {movie.title}</h1>
          <div className="overview_text">
            <h1>Movie Overview:</h1>
            <h3> {movie.overview}</h3>
          </div>

          <div className="stream_text">
            <h1 className="st">Streaming Options</h1>
            <br />
            <h2>
              <li>
                Rent:{"  "}
                {watchProvider.results.IN.rent
                  ? watchProvider.results.IN.rent.map((x) => {
                      return x.provider_name + ", ";
                    })
                  : "No Rent options available"}
              </li>
              <br />
              <li>
                {" "}
                Flatrate:{"  "}
                {watchProvider.results.IN.flatrate
                  ? watchProvider.results.IN.flatrate.map((y) => {
                      return y.provider_name + ", ";
                    })
                  : "No Flatrate Options Available"}
              </li>
              <br />
              <li>
                {" "}
                Buy:{"     "}
                {watchProvider.results.IN.buy
                  ? watchProvider.results.IN.buy.map((z) => {
                      return z.provider_name + ", ";
                    })
                  : "N/A"}
              </li>
            </h2>
          </div>

          {/* <h1 className="IMDB_text">IMDB Ratingss: {imdb.imdbRating}</h1> */}
          <h1 className="IMDB_text">
            IMDB Ratings:
            <a href={"https://imdb.com/title/" + movie.imdb_id}>
              {imdb.imdbRating}
            </a>
          </h1>

          <h1 className="movie_image">
            <a href={"https://youtube.com/watch?v=" + trailer.results[0].key}>
              <img
                //className="movie_image"
                src={
                  image.backdrops[0]
                    ? "https://image.tmdb.org/t/p/w500" +
                      image.backdrops[0].file_path
                    : ""
                }
              />
            </a>
          </h1>

          <h1 className="favorite_text">
            Favorite this: <button onClick={handleFavorite}>Favorite</button>
          </h1>
          {/* <img
            className="movie_image"
            src={
              image.backdrops[0]
                ? "https://image.tmdb.org/t/p/w500" +
                  image.backdrops[0].file_path
                : ""
            }
          /> */}
        </div>
        <div className="footer_position">
          <Footer />
        </div>
      </div>
    );
  }
}

export default MoviePage;
