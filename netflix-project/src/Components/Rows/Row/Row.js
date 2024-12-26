import React, { useEffect, useState } from 'react'
import axios from "../../../axios"
import './Row.css'
import movieTrailer from 'movie-trailer';
import Youtube from 'react-youtube'
const Row = ({title,fethUrl,isLargeRow}) => {
  const[movies,setmovies]=useState([]);
  const [trailer,setTrailer]=useState("");
  
  const base_url='https://image.tmdb.org/t/p/original'
  useEffect(()=>{

    (async()=>{
      try{
        const request2= await axios.get(fethUrl);
        // console.log(request2);
        setmovies(( request2).data.results);
      }
      catch(error){
        console.error("error : ",error);
        }
    })()
  },[fethUrl])

  const handleClick=(movie)=>{
    if(trailer){
      setTrailer('')
    }
    else{
      movieTrailer(movie?.title||movie?.name||movie?.original_name)
      .then((url) => {
        console.log(url)
        const urlParams=new URLSearchParams(new URL(url).search)
        console.log(urlParams);
        console.log(urlParams.get('v'))
        setTrailer(urlParams.get('v'));

      })
    }
  }
  const opts={
    height:'390',
    width:"100%",
    playerVars:{
      autoplay:1,
    },
  }
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row_posters'>
        {movies.map((movie,index)=>(
          <img 
              onClick={() =>  handleClick(movie)}
              key={index} src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`}
              alt={movie.name} className={`row_poster ${isLargeRow && "row_pasterLarge"}`}
              />
        )
        )}
      </div>
      <div style={{padding:"40px"}}>
        {trailer && <Youtube videoId={trailer} opts={opts}/>}
      </div>
      
    </div>
  )
}

export default Row
