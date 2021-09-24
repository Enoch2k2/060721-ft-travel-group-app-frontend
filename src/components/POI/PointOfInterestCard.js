import React from 'react'
import { Link } from 'react-router-dom'
import icons from '../../assets/icons/data'
const PointOfInterestCard = ({ poi }) => {

  // console.log(poi)
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
            <span>{poi.city}</span>
              <span>Rating:{poi.averageRating}</span>
           <span>{poi.reviews} reviews </span>
          <span>Price Range:{poi.pricePoint}</span>
      </div>
    </div>
    </Link>
  )
}


  

export default PointOfInterestCard
