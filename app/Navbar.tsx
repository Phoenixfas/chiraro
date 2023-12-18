'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const [scrollingUp, setScrollingUp] = useState(true)

    useEffect(() => {
        var lastScrollTop = 0

        const handleScroll = () => {
            var st = window.scrollY || document.documentElement.scrollTop;
            if (st > lastScrollTop){
                setScrollingUp(false)
            } else {
                setScrollingUp(true)
            }
            lastScrollTop = st;
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
        
    }, [])

  return (
    <div className="w-full flex flex-col items-center">
        <div className={`w-[95%] duration-300 fixed ${scrollingUp ? 'top-5' : 'top-0'} bg-[rgba(255,255,255,.05)] backdrop-blur-sm flex items-center justify-between px-8 py-3 border-[2px] border-[#192655] rounded-2xl`}>
            <Link href={"/"} className='flex items-center text-[25px] tracking-[.4rem]'>
                <p className=''>CH</p>
                <Image src="/logo.svg" alt="logo" width="30" height="45" className='w-auto h-[45px] object-contain mr-1'/>
                <p>RARO</p>
            </Link>

            <div className="flex items-center gap-14 text-base">
                <Link href={"/services"} className='hover:text-[#aaa] duration-300'>Services</Link>
                <Link href={"/"} className='hover:text-[#aaa] duration-300'>Pricing</Link>
                <Link href={"/"} className='hover:text-[#aaa] duration-300'>About</Link>
                <Link href={"/"} className='hover:text-[#aaa] duration-300'>Contact</Link>
            </div>
        </div>
    </div>
  )
}
