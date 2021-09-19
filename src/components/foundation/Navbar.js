import React from 'react'
import { NavLink } from "react-router-dom"
import icons from '../../assets/icons/data'
const Navbar = () => {
  return (
    <>



      <div
        className='sidebar'
          >
       
          <NavLink
            to='/'
          >
            <button className='sidebar-link' >
              {icons[11].svg}
            
            </button>
          </NavLink>
              <span >My plans</span>
          <NavLink
            to='/review'
          >
            <button className='sidebar-link'>
              {icons[3].svg}

            </button>
          </NavLink>
              <span >reviews</span>
          <NavLink to='/'>
            <button className='sidebar-link'>
              {icons[1].svg}

            </button>
          </NavLink>
              <span >Profile</span>
         
          <NavLink to='/new'>
            <button className='sidebar-link'> {icons[4].svg}
            
             </button>
          </NavLink>
            <span >create</span>
        
          <NavLink to='/login'>
            <button className='sidebar-link'> {icons[10].svg}
            
             </button>
          </NavLink>
            <span >Explore</span>
        </div>






    </>

  )
}

export default Navbar
