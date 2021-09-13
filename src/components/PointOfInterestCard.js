import React from 'react'
import { Link } from 'react-router-dom'

const PointOfInterestCard = ( { poi } ) => {


  return (
    <div className="shadow-md flex-1 p-2 block">
      <h3><Link to="/">{poi.name}</Link></h3>
      <img className="card-img" src={poi.image} alt={`a nice place to visit in ${poi.city}`}/>
      <h4>{poi.city}</h4>
      <span>{poi.rating}</span>
      <span>{poi.reivews} reviews</span>
      <span>{poi.pricePoint}</span>
    </div>
  )
}

export default PointOfInterestCard
