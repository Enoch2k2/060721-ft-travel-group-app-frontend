import React, { useState, useEffect } from 'react'
import { baseUrl } from '../Globals'
import PointOfInterestCard from './PointOfInterestCard'
import dummyData from '../dummy_data'


const CardContainer = (  ) => {
  const [pointsOfInterests, setPointsOfInterests] = useState([])

  
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${baseUrl}`)
      const data = await response.json()
        // if (response.ok) { 
          setPointsOfInterests(data)
        // } else {
        //   handleErrors(data.errors)
        // }
    }
    getData()
    console.log(pointsOfInterests)
  }, [])


  return (
    <div className="p-10 grid grid-cols-3 gap-x-6 gap-y-6">
      {pointsOfInterests.map( poi => <PointOfInterestCard key={poi.id} poi={poi} />)}
    </div>
  )
}

export default CardContainer
