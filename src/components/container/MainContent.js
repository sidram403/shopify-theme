import React from 'react'
import IndexSection from './index/IndexSection'
import PromoGrid from './promogrid/PromoGrid'
import Category from './category/Category'
import AccessoryCard from './promogrid/AccessoryCard'
import OfferCards from './grid/OfferCards'
import Popular from './popular/Popular'
import NewProductPromo from './promogrid/NewProductPromo'
import ShopNewLookCard from './promogrid/ShopNewLookCard'
import JournalContent from './journal/JournalContent'

const MainContent = () => {
  return (
    <div>
      <IndexSection />
      <div className='promo-grid'>
        <PromoGrid />
      </div>
      <Category />
      <AccessoryCard />
      <OfferCards />
      <Popular />
      <NewProductPromo />
      <ShopNewLookCard />
      <JournalContent />
    </div>
  )
}

export default MainContent
