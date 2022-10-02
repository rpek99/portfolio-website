import React from 'react'

interface Props {}

const Technologies = (props: Props) => {
    return(
        <div className='w-full py-[10rem] px-4 bg-white' id="projects">
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-transparent' src='https://static.vecteezy.com/system/resources/previews/004/261/133/non_2x/phone-mobile-icon-flat-style-isolated-on-white-background-telephone-symbol-call-illustration-sign-for-web-and-mobile-app-free-free-vector.jpg' alt='/'/>
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='bg-violet-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-violet-50 hover:scale-105 duration-200 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-400'>View Code</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-transparent' src='https://static.vecteezy.com/system/resources/previews/004/511/733/non_2x/camera-icon-on-white-background-vector.jpg' alt='/'/>
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='bg-violet-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-violet-50 hover:scale-105 duration-200 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-400'>View Code</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-transparent' src='https://thumbs.dreamstime.com/b/plane-icon-white-background-thin-line-plane-icon-white-background-99178179.jpg' alt='/'/>
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='bg-violet-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-violet-50 hover:scale-105 duration-200 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-400'>View Code</button>
                </div>
            </div>
        </div>
    )
}

export default Technologies;