import React, { useEffect, useState } from 'react';
import axios from '../../axios'
import request from '../../request';
import './Banner.css';
const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
       
        // Fetch data from TMDB API
        const request1=await axios.get(request.fetchNetflixOriginals);
            // console.log(request1);
        // Set a random movie from the results
        setMovie(
          request1.data.results[
            Math.floor(Math.random() * request1.data.results.length)
          ]
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  // Render the banner with movie details
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: 'center ',
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button play">Play</button>
          <button className="banner-button myList">My List</button>
        </div>
        <h1 className="banner-description">
          {movie?.overview?.length > 150
            ? movie.overview.substring(0, 150) + '...'
            : movie?.overview}
        </h1>
        <div className='banner-fade-bottom'></div>
      </div>
    </header>
  );
};

export default Banner;
