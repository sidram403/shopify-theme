import React from 'react'

const CategoryShowsCards = () => {

    const products = [
        {
            id: 1,
            name: 'Tops',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            categories:[
                {
                    id:1,
                    name:"Long Sleeve",
                    href:"#"
                },{
                    id:2,
                    name:"3/4 Sleeve",
                    href:"#"
                },{
                    id:3,
                    name:"Half Sleeve",
                    href:"#"

                },{
                    id:4,
                    name:"Short Sleeve",
                    href:"#"

                },{
                    id:5,
                    name:"Sleeveless",
                    href:"#"

                },

            ]
        },
        {
            id: 2,
            name: 'Tunics',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            categories:[
                {
                    id:1,
                    name:"Long sleeve",
                    href:"#"

                },{
                    id:2,
                    name:"Half sleeve",
                    href:"#"

                },{
                    id:3,
                    name:"Short sleeve",
                    href:"#"

                },

            ]
        },
        {
            id: 3,
            name: 'Dresses',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            categories:[
                {
                    id:1,
                    name:"Long sleeve",
                    href:"#"

                },{
                    id:2,
                    name:"Half sleeve",
                    href:"#"

                },{
                    id:3,
                    name:"Short sleeve",
                    href:"#"

                },{
                    id:4,
                    name:"Maxi sleeve",
                    href:"#"

                },

            ]
        },
        {
            id: 4,
            name: 'Accessories',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            categories:[
                {
                    id:1,
                    name:"View all",
                    href:"#"

                }

            ]
            
        },
        // More products...
    ]


    return (
        <div className='h-full w-full'>
            <div className='lg:mx-48'>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl  lg:max-w-7xl lg:px-8">

                        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-32">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="header-category-name text-gray-700">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className=" absolute inset-0 text-black font-bold" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                    {product.categories.map((category) =>(
                                        <div key={category.id} className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="header-category-all-names text-gray-700">
                                                <a href={category.href}>
                                                    <span aria-hidden="true" className=" absolute inset-0 text-black font-bold" />
                                                    {category.name}
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CategoryShowsCards
