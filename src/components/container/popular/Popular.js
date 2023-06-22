import React from 'react'
import PopularCards from './PopularCards'

const Popular = () => {
  return (
    <div className='index-section'>
        <div className='page-width'>
            <div className='section-head text-center'>
                <h2 className='section-header--title text-uppercase'>Popular Picks</h2>
            </div>
            <div className='section-button text-center'>
                <button className='text-uppercase'>View All</button>
            </div>
            <PopularCards />
        </div>
      
    </div>
  )
}

export default Popular
