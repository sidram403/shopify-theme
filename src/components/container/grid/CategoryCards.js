import * as React from 'react';

export default function CategoryCards() {

  const products = [
    {

      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'images/p1.png',
      btnText:"Tops"
    },
    {

      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'images/p2.png',
      btnText:"Tunics"
    },
    {

      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'images/p2.png',
      btnText:"Dresses"
    },
    {

      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'images/p2.png',
      btnText:"Sweatshirts"
    },
  ]

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <div key={product.id} className="group relative ">
              <div className="collection-group-cards relative aspect-h-1 aspect-w-1 w-full overflow-hidden transition-transform ease-out duration-300  group-hover:opacity-100 rounded-md bg-gray-200 lg:aspect-none  lg:h-90">
                <div className="relative">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="image-effect h-full w-full object-cover object-center lg:h-full lg:w-full  transition-transform ease-out duration-300 hover:scale-105"
                />
                </div>
                <span className="collection-item">
                    <span>{product.btnText}</span>
                </span>
                
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-black px-4 py-2 uppercase tracking-widest	absolute">Button</button>
                 </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}