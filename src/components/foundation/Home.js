import React, { useState, useEffect } from 'react'
import CardContainer from "../POI/CardContainer"
import Filter from './Filter'
import SearchBar from './SearchBar'



const Home = () => {

  return (
    <section className='p-4 '>
     
          {/* <SearchBar /> */}
          <Filter/>
          <CardContainer />

      

    </section>

  )
}

export default Home
