import React from 'react'
import PointOfInterestCard from './PointOfInterestCard'
const CardContainer = ( { pointsOfInterests } ) => {
  console.log(pointsOfInterests)

  return (
    <div className="flex items-center">
      {pointsOfInterests.map( poi => <PointOfInterestCard key={poi.id} poi={poi} />)}
    </div>
  )
}

export default CardContainer
