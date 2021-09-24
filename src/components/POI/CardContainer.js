import React, { useState, useEffect} from 'react'
import PointOfInterestCard from './PointOfInterestCard'
import dummyData from '../../assets/dummy_data'
import { baseUrl, useDummyData } from '../../Globals'

const CardContainer = () => {

  const [pointsOfInterests, setPointsOfInterests] = useState([])

  useEffect(() => {

// If useDummyData global is set to true, back end call to postgres will be skipped and dummy data will
// be used instead.
    if (useDummyData) { 

      setPointsOfInterests(dummyData)

    } else {

      const getData = async () => {
        try {
          const response = await fetch(`${baseUrl}`)
          const data = await response.json()
          setPointsOfInterests(data)
        } catch (error){
          console.log(error)
          console.log('Make sure backend is running!')
        }
      }
      getData()
    }
  }, [])
  
  console.log(pointsOfInterests)

  return (

    <div className="main">
      {pointsOfInterests.map( poi => <PointOfInterestCard key={poi.id} poi={poi} />)}
    </div>
  )
}

export default CardContainer
