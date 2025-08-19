import React from 'react'
import {Link} from 'react-scroll'
import { Particles } from '@/components/Particles';
import HeroText from '@/components/HeroText';

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { Float } from "@react-three/drei";
import { easing } from "maath";
import { useMediaQuery } from 'react-responsive';
import Loader from '@/components/Loader';
import { Ghost } from '@/components/Ghost'

interface Props {}

const Hero = (props: Props) => {
    const isMobile = useMediaQuery({ maxWidth: 853 });
    
    return(
        <div className='text-white p-2' id="home">
           <Particles
                className="absolute inset-0 -z-50"
                quantity={100}
                ease={80}
                color={"#ffffff"}
                refresh
           />
           
           {!isMobile && (
               <>
                   <HeroText />
                   <figure
                        className="absolute inset-4"
                        style={{ width: "100vw", height: "100vh" }}
                    >
                        <Canvas camera={{ position: [0, 2, 3] }}>
                        <Suspense fallback={<Loader />}>
                            <ambientLight intensity={0.5} />
                            <directionalLight 
                                position={[10, 10, 5]} 
                                intensity={10} 
                                castShadow 
                                shadow-mapSize-width={2048}
                                shadow-mapSize-height={2048}
                            />
                            <pointLight position={[-10, -10, -5]} intensity={0.5} />
                            <Float>
                                <Ghost
                                    scale={1.2}
                                    position={[3.2, 0, 0]}
                                />
                            </Float>
                            <Rig />
                        </Suspense>
                        </Canvas>
                    </figure>
               </>
           )}
           
           {isMobile && (
               <div className='flex flex-col'>
                   <HeroText />
                   <div className='w-full h-250 absolute items-center justify-center mt-64'>
                       <Canvas camera={{ position: [0, 1.5, 2.5] }}>
                       <Suspense fallback={<Loader />}>
                           <ambientLight intensity={0.5} />
                           <directionalLight 
                               position={[10, 10, 5]} 
                               intensity={10} 
                               castShadow 
                               shadow-mapSize-width={2048}
                               shadow-mapSize-height={2048}
                           />
                           <pointLight position={[-10, -10, -5]} intensity={0.5} />
                           <Float>
                               <Ghost
                                   scale={0.7}
                                   rotation={[-0.9, Math.PI / 1.35, 0.12]}
                                   position={[0, 0, 0]}
                               />
                           </Float>
                           <Rig />
                       </Suspense>
                       </Canvas>
                   </div>
               </div>
           )}
        </div>
    )
}

function Rig() {
    return useFrame((state, delta) => {
      easing.damp3(
        state.camera.position,
        [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
        0.5,
        delta
      );
    });
}

export default Hero;