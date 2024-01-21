import clients from '@/data/clients'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function RecentClients() {
  return (
    <div className="relative flex flex-col w-full mt-20 items-center py-14 px-5 gap-[50px]">
        <h1 className="w-fit mb-10 text-[2.5rem] text-center sm:text-[3em] relative before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-1/2 before:h-[3px] before:rounded-full before:bg-[#01BAEF]">Our Recent Clients</h1>
        <div className="w-full max-w-[1000px] flex flex-wrap gap-5 justify-center sm:justify-between items-center">
            {clients && clients.map((client, index) => (
                <Link className='hover:scale-125 duration-300' href={client.link} key={index} title={client.name}>
                    <Image className='w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-contain' src={client.image} width={100} height={100} alt={client.name} />
                </Link>
            ))}
        </div>
    </div>
  )
}
