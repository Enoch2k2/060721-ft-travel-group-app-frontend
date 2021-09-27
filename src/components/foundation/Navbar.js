import React from 'react'
import { NavLink } from "react-router-dom"
import icons from '../../assets/icons/data'
const Navbar = () => {
  return (
    <>

        <header>
            <section className='nav-header'>
              <div className='logo'>
                 <i className='logo-i'>
                {icons[12].svg}
                 </i>
              <h1>Travel</h1>
           </div>

      <div
        className='sidebar'
        >
         
          <NavLink
            to='/'
            >
            <button className='sidebar-link' >
              {/* {icons[11].svg} */}
            
              <span >My plans</span>
            </button>
          </NavLink>
          <NavLink
            to='/review'
            >
            <button className='sidebar-link'>
              {/* {icons[3].svg} */}
              <span >reviews</span>

            </button>
          </NavLink>
          <NavLink to='/landing'>
            <button className='sidebar-link'>
              {/* {icons[1].svg} */}
              <span >Profile</span>

            </button>
          </NavLink>
         
          <NavLink to='/new'>
            <button className='sidebar-link'> 
            {/* {icons[4].svg} */}
            
            <span >create</span>
             </button>
          </NavLink>
        
          <NavLink to='/explore'>
            <button className='sidebar-link'> 
            {/* {icons[10].svg} */}
            <span >Explore</span>
            
             </button>
          </NavLink>
          <NavLink to='/signin'>
            <button className='sidebar-link'> 
            {/* {icons[10].svg} */}
            <span >Sign in</span>
            
             </button>
          </NavLink>
        </div>



              </section>

            </header>


    </>

  )
}

export default Navbar
