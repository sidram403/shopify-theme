import React from 'react'

const SeasonShowsCards = () => {

    const seasons = [
        {
            id: 1,
            name: 'Spring 2023',
            href: '#',
            imageSrc: 'images/spring.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            categories:[
                {
                    id:1,
                    name:"View all",
                    href:"#"

                }

            ]
        },
        {
            id: 2,
            name: 'Summer 2023',
            href: '#',
            imageSrc: 'images/summer.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            categories:[
                {
                    id:1,
                    name:"View all",
                    href:"#"

                }

            ]
        },
        {
            id: 3,
            name: 'Fall 2023',
            href: '#',
            imageSrc: 'images/fall.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            categories:[
                {
                    id:1,
                    name:"View all",
                    href:"#"

                }

            ]
        },
        {
            id: 4,
            name: 'Winter 2023',
            href: '#',
            imageSrc: 'images/winter.jpg',
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
                            {seasons.map((season) => (
                                <div key={season.id} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-32">
                                        <img
                                            src={season.imageSrc}
                                            alt={season.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="header-category-name text-gray-700">
                                                <a href={season.href}>
                                                    <span aria-hidden="true" className=" absolute inset-0 text-black font-bold" />
                                                    {season.name}
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                    {season.categories.map((category) =>(
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

export default SeasonShowsCards
