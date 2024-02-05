import React from 'react'
import WTypeChoose from './WTypeChoose'
import WebPackages from './WebPackages'

export default function page() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center pt-40'>
        <WTypeChoose />
        <WebPackages />
    </div>
  )
}
