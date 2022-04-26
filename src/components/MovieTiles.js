import axios from 'axios'
import React from 'react'
import requests from '../request'

const MovieTiles = () => {
    function fetchMovies () {
    axios.get(requests.fetchActionMovies)
    .then((res)=> console.log(res.data))
    .catch((err)=> console.log(err))
      console.log('Nischal fetched Movies')   
    }
  return (
    <div>MovieTiles
        <button onClick={fetchMovies}>fetchMovies</button>
    </div>
  )
}

export default MovieTiles