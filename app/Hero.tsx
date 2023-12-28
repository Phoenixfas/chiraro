import Link from 'next/link'
import React from 'react'
import Hero3d from './Hero3d'

export default function Hero() {
  return (
    <div id='hero' className='w-full h-auto md:h-screen pt-[89px] flex flex-col-reverse md:flex-row mb-20 md:mb-0'>
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-start px-10 md:pl-10">
            <h1 className='lg:text-7xl lg:leading-[6rem] md:text-6xl md:leading-[5.25rem] text-[2.5rem] leading-[3rem] font-bold mb-7'>GROW YOUR <span className='text-[#01BAEF]'>DIGITAL</span> PRESENCE</h1>
            <p className='sm:text-2xl sm:leading-10 text-[1rem] leading-8 text-[#aaa] mb-10'>Innovation guides us, crafting digital excellence to propel your business higher.</p>
            <div className="flex items-center gap-10">
                <Link href={"/"} className='border-[3px] border-[#01BAEF] text-[#01BAEF] text-xl px-16 py-5 rounded-[9999px] duration-500 hover:bg-[#01BAEF] hover:text-white'>Get Started</Link>
                {/* <Link href={"/"} className='border-[3px] border-[#01BAEF] bg-[#01BAEF] text-white text-xl px-10 py-3 rounded-[9999px]'>Explore</Link> */}
            </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center md:pr-10">
          <Hero3d />
        </div>
    </div>
  )
}
