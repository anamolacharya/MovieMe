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

function SearchPage() {
  //const movieID = useParams().movieID;

  const [searchMovie, setSeachMovie] = useState([]);

  const [searchString, setSearchString] = useState("");
  const fetchMovieID =
    "https://api.themoviedb.org/3/search/multi?api_key=6bc6187ce75ef23b68c83c1f02848597&language=en-US&page=1&include_adult=false&query=avengers";
  async function fetchData() {
    const searchMovieRequest = await axios.get(fetchMovieID);
    setSeachMovie(searchMovieRequest.data);
  }

  return (
    <div className="box">
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="movieName"
          onChange={(e) => {
            console.log(e.target.value);
            setSearchString(e.target.value);
          }}
        />
        <button
          onClick={(event) => {
            fetchData();
            window.location.href = "/moviepage/" + searchMovie.results[0].id;
          }}
          class=" btn btn-outline-success my-2 my-sm-0 "
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchPage;
