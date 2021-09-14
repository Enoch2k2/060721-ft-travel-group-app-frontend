import React from 'react'
import { Link } from 'react-router-dom'

const PointOfInterestCard = ( { poi } ) => {


  return (
    <Link className="" to="/">
    <div className="shadow-md flex-1 p-1 block rounded-lg">
      <img className="card-img" src={poi.image} alt={`a nice place to visit in ${poi.city}`}/>
      <h3 className="font-bold">{poi.name}</h3>
      <h4>{poi.city}</h4>
      <p>Rating:{poi.averageRating}</p>
      <p>{poi.reviews} reviews </p>
      <p>Price Range:{poi.pricePoint}</p>
    </div>
    </Link>
  )
}

export default PointOfInterestCard
