import axios from '../axios';
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import '../css/Footer.css';
import Row from './Row';
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
  useHistory,
} from 'react-router-dom';
import { checkPropTypes } from 'prop-types';

function SearchPage() {
  //const movieID = useParams().movieID;

  const history = useHistory();
  let searchMovieRequest = '';
  let searchMovie = '';

  const [searchString, setSearchString] = useState('');

  async function fetchData() {
    const fetchMovieID =
      'https://api.themoviedb.org/3/search/multi?api_key=6bc6187ce75ef23b68c83c1f02848597&language=en-US&page=1&include_adult=false&query=' +
      searchString;
    searchMovieRequest = await axios.get(fetchMovieID);
    console.log('SerachMovieRequest; ', searchMovieRequest);
    searchMovie = await searchMovieRequest.data.results[0];
    history.push(`/moviepage/${searchMovie.id}`);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="box">
      <form class="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          // name="movieName"
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        />
        <button class=" btn btn-outline-success my-2 my-sm-0 " type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchPage;
