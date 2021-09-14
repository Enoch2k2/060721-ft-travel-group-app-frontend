import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dummyData from '../dummy_data';

const PointOfInterestDetails = () => {

    let { id } = useParams();
    const [ selectedPOI, setSelectedPOI ] = useState()

    useEffect(()=>{

        //Make backend call to fetch point of interest with given ID provided by Params.
        //For now, we'll make a "fetch" to access the dummyData with provided ID

        // setSelectedPOI

        console.log(dummyData)

    },[])


    return (
        <div>


            
        </div>
    )
}

export default PointOfInterestDetails
