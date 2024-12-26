import React from 'react'
import Row from '../Row/Row'
import request from '../../../request'

const RowLIST = () => {
  return (
    <>
      <Row 
      title="NETFLIX ORIGINALS"
      fethUrl={request.fetchNetflixOriginals}
      isLargeRow={true}

      />
      <Row 
      title="TOP RATED MOVIES"
      fethUrl={request.fetchTopRatedMovies}
      
      />
      <Row 
      title="ATION MOVIES"
      fethUrl={request.fetchActionMovies}
      
      />
      <Row 
      title="COMEDY MOVIES"
      fethUrl={request.fetchComedyMovies}
      
      />
      <Row 
      title="HORROR MOVIES"
      fethUrl={request.fetchHorrorMovie}
      
      />
      <Row 
      title="ROMANCE MOVIES "
      fethUrl={request.fetchRomance}
      
      />
      <Row 
      title="DOCUMENTARIES"
      fethUrl={request.fetchDocumentaries}
     
      />
       <Row 
      title="TV SHOW"
      fethUrl={request.fetchTvShow}
     
      />
    </>
  )
}

export default RowLIST
