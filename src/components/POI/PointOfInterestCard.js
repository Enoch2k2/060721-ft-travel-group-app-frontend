import React from 'react'
import { Link } from 'react-router-dom'
import icons from '../../assets/icons/data'
const PointOfInterestCard = ({ poi }) => {

  console.log("poi",poi)
  let Background = poi.image
  return (

    <Link className="" to={`/pointsofinterests/${poi.id}`}>
    <div className='bg-white shadow-xl rounded-lg overflow-hidden card'
      style={{backgroundImage: "url(" + Background + ")"}}
    >
      <i>{icons[8].svg}</i>
      <div  className='bg-cover bg-center h-40 p-4 pt-0 flex justify-end items-center max-w-md'>
        
        <p className="uppercase tracking-widest text-sm text-white bg-black py-1 px-2 rounded opacity-75 shadow-lg">{poi.city}</p>
    </div>
      <div className='a-detail'>
          <span className="font-bold">{poi.name}</span>
           
              <span>Rating:{poi.average_rating}</span>
           <span>{poi.num_reviews} reviews </span>
          <span>Price Range:{poi.price_point}</span>
      </div>
    </div>
    </Link>
  )
}


  

export default PointOfInterestCard
