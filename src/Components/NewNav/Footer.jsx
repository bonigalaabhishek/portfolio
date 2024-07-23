// import React from 'react'

const Footer = () => {
    return (
    <div className='flex gap-5 w-full h-screen bg-zinc-900 p-20' >
      <div className='w-1/2 font-mono flex flex-col justify-between h-full'>
        <div className="heading">
        <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-6'>EYE-</h1>
        <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-6'>OPENING-</h1>
        </div>
        <h1>ochi</h1>
      </div>
      <div className='w-1/2 '>
      <h1 className='text-[5vw] font-semibold uppercase leading-none -mb-6'>Presentations
      </h1>
      <div className='dets font-mono mt-10'>
            <a className='block text-xl font-mono' href="">Facebook</a>
            <a className='block text-xl font-mono' href="">Linkedin</a>
            <a className='block text-xl font-mono' href="">Instagram</a>
        </div>
      </div>
    </div>
  )
}
 
export default Footer
