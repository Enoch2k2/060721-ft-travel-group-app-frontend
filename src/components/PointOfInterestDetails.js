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
        setSelectedPOI(poi)
        console.log(poi)
        setPoiDataReady(true)
    }, [])


    return (
        <div>
            {poiDataReady ?
                <>
                    <h3>{selectedPOI.name}</h3>
                    <img className="card-img" src={selectedPOI.image} alt={`a nice place to visit in ${selectedPOI.city}`} />
                    <h4>{selectedPOI.city}</h4>
                    <span>{selectedPOI.rating}</span>
                    <span>{selectedPOI.reviews} reviews</span>
                    <span>{selectedPOI.pricePoint}</span>
                </>
                : null }


        </div>
    )
}

export default PointOfInterestDetails
