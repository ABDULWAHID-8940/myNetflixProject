const API_KEY = process.env.REACT_APP_API_kEY; // Corrected: uppercase _

// API requests
const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, // Corrected: with_genres instead of genres
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, // Corrected: with_genres instead of genres
    fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`, // Corrected: with_genres instead of genres
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, // Corrected: with_genres instead of genres
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, // Corrected: with_genres instead of genres
    fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-us&page=1`,
};

export default request;

// https://api.themoviedb.org/3/discover/movie?api_key=7e60002670381f8d5f2a3b871c622930&with_genres=28
// https://image.tmdb.org/t/p/w500${movie}?.backdrop_path