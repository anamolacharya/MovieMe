import React from 'react';
import '../App.css';
import Row from '../components/Row';
import requests from '../requests';
import Banner from './Banner';
import Nav from './Nav';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import SignInSide from "../pages/SignInPage";

function Home() {
    return (
    <div>
    <Banner/>
    <Row title= "Netflix Original" fetchUrl= {requests.fetchNetfllixOriginals}
    isLargeRow />
    <Row title= "Trending Now" fetchUrl = {requests.fetchTrending}/>
    <Row title= "Top Rated" fetchUrl = {requests.fetchTopRated}/>
    <Row title= "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
    <Row title= "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
    <Row title= "Romantic Movies" fetchUrl = {requests.fetchRomanceMovies}/>
    <Row title= "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    <Row title= "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
    <Footer/>
    </div>
      
    )
}

export default Home;
