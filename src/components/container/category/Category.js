import React from 'react'
import CategoryCards from '../grid/CategoryCards'

const Category = () => {
  return (
    <div className='index-section'>
        <div className='page-width'>
            <div className='section-head text-center'>
                <h2 className='section-header--title text-uppercase'>Shop By Category</h2>
            </div>
            <CategoryCards />
        </div>
      
    </div>
  )
}

export default Category
