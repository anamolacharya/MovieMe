
//installed firebase 
//install axios to proper use the API call
// install react-youtube
// install movie-trailer

import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">

     <Nav/>
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
  );
}

export default App;
