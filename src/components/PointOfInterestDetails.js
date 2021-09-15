import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dummyData from '../dummy_data';

const PointOfInterestDetails = () => {

    let { id } = useParams();
    const [poiDataReady, setPoiDataReady] = useState(false)
    const [selectedPOI, setSelectedPOI] = useState()

    useEffect(() => {

        //Make backend call to fetch point of interest with given ID provided by Params.
        //For now, we'll make a "fetch" to access the dummyData with provided ID

        const poi = dummyData.find((item) => item.id == id)
        if (poi) {
            setSelectedPOI(poi)
            setPoiDataReady(true)
            console.log(poi)
        }
        return
    }, [])


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
