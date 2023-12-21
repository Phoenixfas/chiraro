import Link from 'next/link'
import React from 'react'
import Hero3d from './Hero3d'

export default function Hero() {
  return (
    <div id='hero' className='w-full h-screen pt-[89px] px-10 flex'>
        <div className="w-1/2 flex flex-col justify-center">
            <h1 className='text-7xl font-bold leading-[6rem] mb-7'>GROW YOUR <span className='text-[#01BAEF]'>DIGITAL</span> PRESENCE</h1>
            <p className='text-2xl leading-10 text-[#aaa] mb-10'>Innovation guides us, crafting digital excellence to propel your business higher.</p>
            <div className="flex items-center gap-10">
                <Link href={"/"} className='border-[3px] border-[#01BAEF] text-[#01BAEF] text-xl px-16 py-5 rounded-[9999px] duration-500 hover:bg-[#01BAEF] hover:text-white'>Get Started</Link>
                {/* <Link href={"/"} className='border-[3px] border-[#01BAEF] bg-[#01BAEF] text-white text-xl px-10 py-3 rounded-[9999px]'>Explore</Link> */}
            </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <Hero3d />
        </div>
    </div>
  )
}
