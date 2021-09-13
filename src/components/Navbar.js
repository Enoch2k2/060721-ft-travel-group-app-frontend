import React from 'react'
import { NavLink } from "react-router-dom"
import icons from '../data'
const Navbar = () => {
  return (
    <>
    <div className='absolute top-0 left-0 bottom-0
         bg-gradient-to-t from-blue-500 
         via-purple-500 to-purple-700 w-12
         flex flex-col '>
           <NavLink
           to='/'
           >
             <i>
          {icons[0].svg}
          </i>
             </NavLink>
             <NavLink
           to='/review'
           >   <i >
            {icons[3].svg}
          </i>
             </NavLink>
          <i >
            {icons[1].svg}
          </i>
          <i >
            {icons[2].svg}
          </i>
       

   </div>
    
 
    </>
    
  )
}

export default Navbar
