import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dummyData from '../../assets/dummy_data'
import { baseUrl, useDummyData } from '../../Globals';

const PointOfInterestDetails = () => {

    let { id } = useParams();
    const [poiDataReady, setPoiDataReady] = useState(false)
    const [selectedPOI, setSelectedPOI] = useState()

    const getData = async () => {
        try {
            const response = await fetch(`${baseUrl}/${id}`)
            const data = await response.json()
            setSelectedPOI(data)
            setPoiDataReady(true)
        } catch (error) {
            console.log(error)
            console.log('Make sure back end is running!')
        }
      }

    useEffect(() => {

        // If global useDummyData is set to true, we will use dummy data. else, we will make back
        // end call to rails.

        if (useDummyData) {
            const poi = dummyData.find((item) => item.id == id)
            if (poi) {
                setSelectedPOI(poi)
                setPoiDataReady(true)
            }
        } else {
            getData()
        }

    }, [id])


    return (
        <div>
            {poiDataReady ?
                <>
                    <div className="flex flex-col items-center 
              justify-center pt-14" >

                        <img className="card-img w-96" src={selectedPOI.image} alt={`a nice place to visit in ${selectedPOI.city}`} />
                        <h3 className="text-2xl mb-4">{selectedPOI.name}  -  {selectedPOI.city}</h3>
                        <span>Price Range: {selectedPOI.pricePoint}</span>
                        <span>Number of Reviews: {selectedPOI.reviews}</span>
                        <div className='flex flex-row justify-center'>
                            <button className='m-5 border-2 border-purple-400 p-1 rounded'>Leave a Review</button>
                            <button className='m-5 border-2 border-purple-400 p-1 rounded'> Add to Itinerary</button>
                        </div>
                    </div>
                </>
                : null}


        </div>
    )
}

export default PointOfInterestDetails
