import React from 'react'

const ShopNewLookCard = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto  px-4 sm:px-6 ">
        <div className="mx-auto max-w-2xl py-16 lg:max-w-none ">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              <div className="group relative">
                <div className="card-newlook relative  w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-140">
                  <img
                    src="images/bg3.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ShopNewLookCard
