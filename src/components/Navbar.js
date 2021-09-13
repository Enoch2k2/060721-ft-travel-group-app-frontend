import React from 'react'
import { NavLink } from "react-router-dom"
import icons from '../data'
const Navbar = () => {
  return (
    <>
    <div className='absolute top-0 left-0 bottom-0
         bg-gradient-to-t from-blue-500 
         via-purple-500 to-purple-700 
         flex flex-col '>
           <NavLink
           to='/'
           >
          
          {icons[0].svg}
         
             </NavLink>
             <NavLink
           to='/review'
           >  
            {icons[3].svg}
         
             </NavLink>
             <NavLink to='/'>
            {icons[1].svg}
         
            </NavLink>
            <NavLink to='/'>
            {icons[2].svg}
            </NavLink>
        
       

   </div>
    
 
    </>
    
  )
}

export default Navbar
