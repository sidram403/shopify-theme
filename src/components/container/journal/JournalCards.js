import React from 'react'


const JounalCards = () => {
    const journals = [
        {
            id: 1,
            name: 'Looks we love',
            href: '#',
            imageSrc: 'images/bg3.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            date: "May 10, 2023",
        },
        {
            id: 2,
            name: '10 ways to unwind',
            href: '#',
            imageSrc: 'images/bg3.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            date: "May 10, 2023",


        },
        {
            id: 3,
            name: 'Featured Designer: Bethany Jones',
            href: '#',
            imageSrc: 'images/bg3.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            date: "May 10, 2023",


        },

    ]
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
                <a href="">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {journals.map((journal) => (
                            <div key={journal.id} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-96">
                                    <img
                                        src={journal.imageSrc}
                                        alt={journal.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />

                                </div>
                                <div className="mt-4 block text-center justify-center">
                                    <p className=" text-sm text-gray-700 ">
                                        {journal.date}
                                    </p>
                                    <div >
                                        <h3 className="text-xl font-medium text-gray-900 text-center">
                                            <a href={journal.href}>
                                                <span aria-hidden="true" className="absolute inset-0 text-center" />
                                                {journal.name}
                                            </a>
                                        </h3>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </a>

            </div>
        </div>
    )
}

export default JounalCards
