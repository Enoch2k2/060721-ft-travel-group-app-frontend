import React from 'react'
import { Link } from 'react-router-dom'
import icons from '../../assets/icons/data'
const PointOfInterestCard = ( { poi } ) => {

let Background = "https://mosscm.com/wp-content/uploads/2017/11/news-dallas-skyline.jpg"
  return (

    <Link className="" to={`/pointsofinterests/${poi.id}`}>
    <div className='bg-white shadow-xl rounded-lg overflow-hidden card'>
      <i>{icons[8].svg}</i>
      <div  className='bg-cover bg-center h-40 p-4 pt-0 flex justify-end items-center max-w-md'>
          <img 
          style={{backgroundImage: "url(" + Background + ")"}}
         />
        <p className="uppercase tracking-widest text-sm text-white bg-black py-1 px-2 rounded opacity-75 shadow-lg">New York</p>
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
