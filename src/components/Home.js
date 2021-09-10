import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  const [pointsOfInterests, setPointsOfInterests] = useState([])



  return (
    <div>
      <h2>Points of Interest</h2>
      <ul>
        {pointsOfInterests.map( poi => <li><Link>Title</Link></li>)}
      </ul>
    </div>
  )
}

export default Home
