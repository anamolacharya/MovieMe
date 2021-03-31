import React from "react";
import Footer from "./Footer";

function AboutUs() {
  return (
    <div className="background_image">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="bg-image"
      />
      <div className="about-us">
        <p>
          Our application MovieMe is a movie/ TV show search engine where users
          can find enormous information about all the available streaming
          services about the movie/series. With just a simple search of a movie
          or a series on our website, our application scours the internet and
          finds the best streaming options that are available for the movie or
          TV show. Additionally, our application also provides legitimate free
          streaming sources that are available for the intended movie or tv
          shows.
        </p>

        <p>
          The concept behind our application is relatively simple and easy to
          use. A quick search for a movie or a show from our home page would
          provide all the streaming options for the movie. Additionally, our
          application would also be able to provide information about
          geo-restrictions about any particular movie or a TV show and provide
          alternatives for that. For example, the popular TV show F.R.I.E.N.D.S
          is not available for view on Netflix within the USA but is available
          for view in the UK. Our application would provide additional
          information like these to our customers which would make it very easy
          for them and reduce a lot of time searching for movies.
        </p>
        <p>
          {" "}
          In terms of user experience, our application would also display a list
          of similar tv shows and additional recommendations to the user.Viewers
          would also be able to view IMDB , Rotten Tomatoes ratings of the movie
          along with user reviews and other detailed information within our
          application.Talking about additional functionalities, customers would
          also have an option to create an account with our application. This
          enables customers to create a favorites list for all the movies or TV
          shows that they would like to watch in the future. Additional options
          like a free subscription would send out notifications of new and
          popular shows to users that have opted to subscribe.
        </p>
      </div>
      <div className="footer_position">
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
