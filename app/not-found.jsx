import React from 'react'
import Image from 'next/image'
import error from './image/error.png'

const notFound = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <Image className=' object-fit w-[50vw] h-[100vh]' src={error} />
    </div>
  )
}

export default notFound
