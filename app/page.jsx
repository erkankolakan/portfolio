import React from 'react'
import Image from 'next/image'
import profilePhoto from './image/erkan.jpg'
import { BsGithub } from 'react-icons/bs'

const page = () => {
  return (
    <div className='bg-[#232323] w-[100vw] h-[100vh]'>
      <div>
        <div className='flex justify-center items-center p-12  flex-col  gap-4 ' >
          <Image className='rounded-full border-4 w-64  ' src={profilePhoto}/>
          <div className='text-4xl text-white'>Erkan KOLAKAN</div>
          <hr className='w-full'/>
        </div>
        <div className='flex flex-col gap-24'>
          <div className='flex justify-center justify-evenly '>
            <div className='w-[30rem] h-[10rem]  bg-red-800 rounded-xl'> </div>

            <div className='w-[30rem] h-[10rem]  bg-red-800 rounded-xl'>asdasd </div>

            <div className='w-[30rem] h-[10rem]  bg-red-800 rounded-xl'>asdasd </div>
          </div>

          <div className='flex justify-center justify-evenly '>
            <div className='w-[30rem] h-[10rem]  bg-red-800 rounded-xl'>asdasd </div>
            <div className='w-[30rem] h-[10rem]  bg-red-800 rounded-xl'>asdasd </div>
            <div className='w-[30rem] h-[10rem]  bg-red-800 rounded-xl'>asdasd </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default page
