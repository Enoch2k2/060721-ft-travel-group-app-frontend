import React from 'react'
import PointOfInterestCard from './PointOfInterestCard'
const CardContainer = ( { pointsOfInterests } ) => {
  console.log(pointsOfInterests)

  return (
    <div className="p-10 grid grid-cols-3 gap-x-6 gap-y-6">
      {pointsOfInterests.map( poi => <PointOfInterestCard key={poi.id} poi={poi} />)}
    </div>
  )
}

export default CardContainer
