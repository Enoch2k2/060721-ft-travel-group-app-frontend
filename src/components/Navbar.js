import React from 'react'
import { NavLink } from "react-router-dom"
import icons from '../data'
const Navbar = () => {
  return (
    <>

      {/* absolute top-0 left-0 bottom-0 */}
      {/* Changed this to flex-box positioning */}

      <div className='
         bg-gradient-to-t from-blue-500 
         via-purple-500 to-purple-700 
         flex flex-col'>
        <div className='flex flex-col'>
          <NavLink
            to='/'
          >
            <i>
              {icons[0].svg}
            </i>
          </NavLink>
          <NavLink
            to='/review'
          >
            <i>
              {icons[3].svg}
            </i>
          </NavLink>
          <NavLink to='/'>
            <i>
              {icons[1].svg}
            </i>
          </NavLink>
          <NavLink to='/'>
            <i>{icons[2].svg}</i>
          </NavLink>
          <NavLink to='/new'>
            <i> {icons[4].svg} </i>
          </NavLink>
        </div>
        <div>
          <NavLink to='/login'>
            <i> {icons[5].svg} </i>
          </NavLink>

        </div>

      </div>


    </>

  )
}

export default Navbar
