import React from 'react'
import JounalCards from './JournalCards'

const JournalContent = () => {
  return (
    <div className='index-sectio'>
        <div className='page-width'>
            <div className='section-head text-center'>
                <h2 className='section-header--title text-uppercase'>From The Journal</h2>
            </div>
            <div className='section-button text-center'>
                <button className='text-uppercase'>View All</button>
            </div>
            <JounalCards />
        </div>
      
    </div>
  )
}

export default JournalContent
