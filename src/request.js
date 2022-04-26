const API_KEY = "bf69af4ce8edf1a77e1de4ed09ab4377";

const requests = {
    
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&langauage=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top-rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movies?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movies?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movies?api_key=${API_KEY}&with_genres=27`,
    fetchRomannceMovies: `/discover/movies?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movies?api_key=${API_KEY}&with_genres=99`,
    }

    export default requests;