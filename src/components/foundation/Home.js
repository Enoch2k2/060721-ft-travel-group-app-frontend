import React, { useState, useEffect } from 'react'

// import { Link } from "react-router-dom"
import CardContainer from "../POI/CardContainer"
import SearchBar from './SearchBar'
// import dummyData from '../../assets/dummy_data'


const Home = () => {
  // const [pointsOfInterests, setPointsOfInterests] = useState([])



  // useEffect(() => {
  //   setPointsOfInterests(dummyData)
  //   console.log(pointsOfInterests)
  // }, [])


  // console.log('Home Rendering')
  return (
    <section className='p-4 '>
     
          <SearchBar />
          <CardContainer />

      

    </section>

  )
}

export default Home
