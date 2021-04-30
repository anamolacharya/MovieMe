import axios from '../axios';
import React , {useState, useEffect} from 'react';
import Footer from "./Footer";
import "../css/Footer.css";
import Row from "./Row"
import {
    BrowserRouter as Router,
    Link,
    Route,
    useParams
} from 'react-router-dom'
import { checkPropTypes } from "prop-types";



function MoviePage() {
  const movieID = useParams().movieID;
  const [movie, setMovie] = useState([]);
  const [image, setImage] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const fetchURL = 'https://api.themoviedb.org/3/movie/' + movieID +'?api_key=6bc6187ce75ef23b68c83c1f02848597&language=en-US';
  const fetchImageURL = 'https://api.themoviedb.org/3/movie/' + movieID +'/images?api_key=6bc6187ce75ef23b68c83c1f02848597';

//This useEffect helps to get the data from the API
useEffect(() =>{

    //if the bracket is blanck [], it will run once and do not run again 
    async function fetchData(){
        const request = await axios.get(fetchURL);
        const imageRequest = await axios.get(fetchImageURL);
        setMovie(request.data);
        setImage(imageRequest.data)
        console.log(imageRequest.data);
        setLoaded(true);
        //console.log("ImageURL: " + image.backdrops[0])
        return request;
    }
    fetchData();
},[fetchURL]);
if (!loaded) {
  return <h2 style={{ paddingTop: "85px", display: "flex", alignItems: "center", justifyContent: "center"}}>Loading</h2>;
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
        <h1 className="overview_text"> {movie.overview}</h1>
        <h1 className="stream_text">Streaming Link</h1>
        <h1 className="IMDB_text">IMDB Rating</h1>
        <h1 className="favorite_text">Favorite this: </h1>
        <img className = "movie_image" src={image.backdrops[0] ? "https://image.tmdb.org/t/p/w500" + image.backdrops[0].file_path : ''} />
      </div>
          <div className="footer_position">
            <Footer />
          </div>
        </div>

        );
    }
    }

export default MoviePage;