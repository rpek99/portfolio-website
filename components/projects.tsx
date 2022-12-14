import React, {useEffect, useState} from 'react'

import jsonData from '../data/projects.json'

interface Props {}

const Projects = (props: Props) => {
    
    return(
        <div className='w-full py-[10rem] px-4 border-b border-neutral-600 ' id="projects">
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 md:gap-8 gap-24 font-poppins'>
                {jsonData.map((data) => (
                    <div key={data.title} className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 bg-neutral-800 text-neutral-300'>
                        <img src={data.image} className="md:object-cover mx-auto mt-[-8rem] rounded-lg h-48 w-128" />
                        <h2 className='text-2xl font-bold text-center py-8 text-white'>{data.title}</h2>
                        <p className='text-center text-[17px] text-neutral-300'>{data.desc}</p>
                        <a className='mx-auto' target="_blank" rel="noreferrer" href={data.sourceCodeUrl}>
                            <button className='bg-violet-600 w-[150px] rounded-md font-medium mt-8 my-4 py-3 text-violet-50 hover:scale-105 duration-200 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-400'>View Code</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;