import React from 'react'

const ShopNewLookCard = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto  px-4 sm:px-6 ">
        <div className="mx-auto max-w-2xl py-16 lg:max-w-none ">
          <h2 className="text-4xl font-bold text-gray-600 uppercase tracking-widest	">SHOP THE LOOK</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-12 lg:space-y-0">
            <div className="group relative col-span-3">
              <div className="lg:new-look-left-side-image  card-newlook relative  w-full overflow-hidden sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-55 sm:h-140">
                <img
                  src="images/bg3.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>

            </div>
            <div className="group relative grid text-center justify-center">
              <div className="card-newlook  relative overflow-hidden  lg:mt-24 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  sm:h-140">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg"
                  alt=""
                  className="new-look-right-side-image h-full object-cover object-center"
                />
              </div>
              <div className=" flex text-center justify-center">
                <div >
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0 text-center" />
                      White 3/4 Top
                    </a>
                  </h3>

                  <p className="text-sm font-medium text-gray-900 text-center ">
                    $50
                  </p>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ShopNewLookCard
