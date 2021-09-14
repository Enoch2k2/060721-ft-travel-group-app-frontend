import React from 'react'
import { Link } from 'react-router-dom'

const PointOfInterestCard = ( { poi } ) => {


  return (
    <div className="shadow-md flex-1 p-1 block">
      <img className="card-img" src={poi.image} alt={`a nice place to visit in ${poi.city}`}/>
      <Link className="bg-purple-700 inline-block rounded-full p-.5 text-black" to="/">{poi.name}</Link>
      <h4>{poi.city}</h4>
      <span>{poi.rating}</span>
      <span>{poi.reivews} reviews</span>
      <span>{poi.pricePoint}</span>
    </div>
  )
}

export default PointOfInterestCard
