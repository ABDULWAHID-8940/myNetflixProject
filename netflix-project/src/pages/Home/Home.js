import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import RowLIST from '../../Components/Rows/RowLIst/RowLIST.js'
function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <RowLIST/>
      <Footer/>
    </div>
  )
}

export default Home
