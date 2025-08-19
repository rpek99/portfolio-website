import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {}

const Projects = (props: Props) => {
    return (
        <div className='w-full py-16 px-4' id="projects">
            <div className='max-w-[1240px] mx-auto'>
                <h2 className='text-4xl font-bold text-center py-4'>Projects</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <div className='bg-white shadow-xl rounded-lg overflow-hidden'>
                        <img src="https://user-images.githubusercontent.com/66913935/193622673-f2b67c9f-0cb6-4010-be14-9eb02ba41ffe.png" alt="NFT Marketplace" className='w-full h-48 object-cover' />
                        <div className='p-6'>
                            <h3 className='text-xl font-bold text-gray-800 mb-2'>NFT Marketplace</h3>
                            <p className='text-gray-600 mb-4'>NFT marketplace application that you can sell and buy nft. In this project each nft represent an estate.</p>
                            <Link href="https://github.com/rpek99/nft-marketplace-real-estate" target="_blank" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'>
                                View Project
                            </Link>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl rounded-lg overflow-hidden'>
                        <img src="https://user-images.githubusercontent.com/66913935/193624877-e4419782-ee60-4d2e-80f3-de9f8695c390.png" alt="Shopping App" className='w-full h-48 object-cover' />
                        <div className='p-6'>
                            <h3 className='text-xl font-bold text-gray-800 mb-2'>Shopping App</h3>
                            <p className='text-gray-600 mb-4'>This project is a shopping application where university members can buy and sell their belongings among themselves.</p>
                            <Link href="https://github.com/rpek99/react-spring-shopping-application" target="_blank" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'>
                                View Project
                            </Link>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl rounded-lg overflow-hidden'>
                        <img src="https://user-images.githubusercontent.com/66913935/193650825-c2317af6-754d-49b9-8238-52c14cab723d.png" alt="Jewelery Shopping App" className='w-full h-48 object-cover' />
                        <div className='p-6'>
                            <h3 className='text-xl font-bold text-gray-800 mb-2'>Jewelery Shopping App</h3>
                            <p className='text-gray-600 mb-4'>This application designed for jewelery shopping with flask. It also have admin panel to track user actions.</p>
                            <Link href="https://github.com/rpek99/flask-html-shopping-application" target="_blank" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'>
                                View Project
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;