import React from 'react'

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35',
        tag: "",
        originalPrice: ''
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35',
        tag: "Best Selling",
        originalPrice: ''

    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35',
        tag: "Sale",
        originalPrice: '49'

    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35',
        tag: "Sold Out",
        originalPrice: ''

    },
    // More products...
]
const PopularCards = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                                {product.tag !== "" && product.tag === 'Sale' &&
                                    <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs ">
                                        {product.tag}
                                    </div>
                                }
                                {product.tag !== "" && product.tag === 'Sold Out' &&
                                    <div className="absolute top-0 right-0 bg-white text-black px-2 py-1 text-xs ">
                                        {product.tag}
                                    </div>
                                }
                                {product.tag !== "" && product.tag === 'Best Selling' &&
                                    <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 text-xs ">
                                        {product.tag}
                                    </div>
                                }
                            </div>
                            <div className="mt-4 flex text-center justify-center">
                                <div >
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0 text-center" />
                                            {product.name}
                                        </a>
                                    </h3>

                                    <p className="text-sm font-medium text-gray-900 text-center ">
                                        {product.originalPrice !== '' && <s className='mr-4'>${product.originalPrice}{" "}</s>}
                                        ${product.price} {product.originalPrice !== '' && <span className='ml-2 text-red-500'>Save $ {parseInt(product.originalPrice, 10) - parseInt(product.price, 10)}</span>}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopularCards
