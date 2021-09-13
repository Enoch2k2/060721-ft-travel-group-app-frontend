import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import CardContainer from "./CardContainer"
import SearchBar from './SearchBar'

const Home = () => {
  const [pointsOfInterests, setPointsOfInterests] = useState([])

  const dummyData = [
    {
      id: 1,
      name: "Coffee Shop",
      city: "New York",
      image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      averageRating: 4,
      pricePoint: "$2-$12",
      reviews:9
    },
    {
      id: 2,
      name: "Coffee Shop",
      city: "New York",
      image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      averageRating: 3,
      pricePoint: "$2-$12",
      reviews:7
    },
    {
      id:3,
      name: "Coffee Shop",
      city: "New York",
      image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      averageRating: 1,
      pricePoint: "$2-$12",
      reviews:4
    },
    {
      id:4,
      name: "Coffee Shop",
      city: "New York",
      image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      averageRating: 1,
      pricePoint: "$2-$12",
      reviews:4
    },
  ]

  // useEffect(() => {
  //   setPointsOfInterests(dummyData)
  //   console.log(pointsOfInterests)
  // }, [])

  return (
    <section className='pl-2'>
      <h2>Points of Interests</h2>
       <div>
        <SearchBar/>
        <hr/>
        <CardContainer pointsOfInterests={dummyData}/>

      </div>
    </section>
   
  )
}

export default Home
