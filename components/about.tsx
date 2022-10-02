import image1 from '../public/assets/img1.jpg'
import Image from 'next/image'


interface Props {}

//https://i.pinimg.com/474x/63/89/26/638926fd2b4a46e620585669c0dbec1c.jpg

const About = (props: Props) => {
    return(
        <div className='w-full py-16 px-4' id="about">
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='w-[350px] mx-auto my-4'>
                    <Image src={image1}  className="rounded-lg"/>
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='pb-4 border-b-4  border-gray-700 text-violet-500 font-bold text-4xl sm: mt-2'>About Me</p>
                    <p className='text-white text-xl pt-4'>
                       I'm a new graduate computer engineer. I mostly improved myself in the front-end, back-end and database sections.
                       During my internship period, I took part in the project as a full stack developer for 3 months. <br/><br/>
                       As a graduation project, I developed a blockchain-based web application where real estate purchases and sales are carried out.
                       I am currently developing myself on web3, solidity and blockchain.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;