import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MargicButton from './ui/MargicButton'
import { FaLocationArrow } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white'></Spotlight>
        <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw] ' fill='purple'></Spotlight>
            <Spotlight className='-top-28 -left-80 h-[80vh] w-[50vw] ' fill='blue'></Spotlight>
        </div>
        <div className="h-screen w-full dark:bg-[#020617] bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#020617] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        
      </p>
    </div>
    <div className='flex justify-center relative my-20 z-10 '>
<div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
<h1 className='updercase tracking-widest lg:text-lg text-sm md:text-md text-center text-blue-100 max-w-80'>
  Anh Nguyen&rsquo;s portfolio
</h1>
<TextGenerateEffect className='text-center text-[40px] text-2xl md:text-3xl lg:text-4xl font-playfair' words='Welcome to Anh Nguyen&apos;s portfolio'></TextGenerateEffect>
<p className='text-center md:tracking-wider mb-4 text-xs md:text-sm lg:text-md'>Hi, I&apos;m Anh Nguyen, a FrontEnd Developer, based in Ho Chi Minh city!</p>

<a href='#projects'><MargicButton title="Show my Work" icon={<FaLocationArrow style={{color:'white'}}/>} position='right'></MargicButton></a>
</div>
    </div>
    </div>
  )
}

export default Hero
