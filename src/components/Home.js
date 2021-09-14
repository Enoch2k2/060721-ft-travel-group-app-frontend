import React, { useState, useEffect } from 'react'

import { Link } from "react-router-dom"
import CardContainer from "./CardContainer"
import SearchBar from './SearchBar'
import dummyData from '../dummy_data'

const Home = () => {
  const [pointsOfInterests, setPointsOfInterests] = useState([])



  // useEffect(() => {
  //   setPointsOfInterests(dummyData)
  //   console.log(pointsOfInterests)
  // }, [])


  return (
    <section className='pl-2'>
      <div className='main-content-container'>

        <h2>Points of Interests</h2>
        <div>

          <SearchBar />
          <hr />
          <CardContainer pointsOfInterests={dummyData} />

        </div>
      </div>
    </section>

  )
}

export default Home
