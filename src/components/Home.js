import React from 'react'
import CardContainer from "./CardContainer"
import SearchBar from './SearchBar'


const Home = () => {


  console.log('Home Rendering')
  return (
    <section className='pl-2'>
      <div className='main-content-container'>

        <h2>Points of Interests</h2>
        <div>

          <SearchBar />
          <hr />

          <CardContainer />

        </div>
      </div>
    </section>

  )
}

export default Home
