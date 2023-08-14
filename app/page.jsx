"use client"
import React from 'react'
import Image from 'next/image'
import profilePhoto from './image/erkan.jpg'
import { BsGithub, BsInstagram,BsLinkedin,BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { motion } from "framer-motion";


const page = () => {
  return (
    <motion.div className='h-[100vh]'

    initial={{
      opacity: 0,
      scale:.95
    }}
    animate={{
      opacity: 1,
      scale:1
    }}
    transition={{
      duration: .5,
      delay: .5,
   
    }}
 
    
    >
      <div>
        <div className='flex justify-center items-center p-12  flex-col  gap-4 ' >
          <Image className='rounded-full border-4 w-64  ' src={profilePhoto}/>
          <div className='text-4xl text-white'>Erkan KOLAKAN</div>
          <hr className='w-full'/>
        </div>
        <div className='flex flex-col gap-24'>
          <div className='flex justify-center justify-evenly '>
            <motion.div className='w-[30rem] h-[10rem]  bg-white rounded-xl'
            whileHover={{
              scale:1.05,
            }}
            whileTap={{ scale: 1 }}
            transition={{
              type:"spring",
              damping:"30",
              stiffness:900,
              duration:0.5
            }}
            >
              <div className='flex h-full justify-center items-center items-center gap-2 text-4xl font-bold cursor-pointer'>
                <BsGithub size={"80px"}/> Git Hub
              </div>
            </motion.div>

            <motion.div className='w-[30rem] h-[10rem]  bg-white rounded-xl '
            whileHover={{
              scale:1.05,
            }}
            whileTap={{ scale: 1 }}
            transition={{
              type:"spring",
              damping:"30",
              stiffness:900,
              duration:0.5
            }}
            >
              <div className='flex h-full justify-center items-center items-center gap-2 text-4xl font-bold cursor-pointer'>
                <BsLinkedin size={"70px"}/> Linkedin
              </div>
            </motion.div>
            
            <motion.div className='  w-[30rem] h-[10rem]  bg-white  rounded-xl'
            whileHover={{
              scale:1.05,
            }}
            whileTap={{ scale: 1 }}
            transition={{
              type:"spring",
              damping:"30",
              stiffness:900,
              duration:0.5
            }}
            >
              <div className='flex h-full justify-center items-center items-center gap-2 text-4xl font-bold cursor-pointer'>
                <BsInstagram size={"70px"}/> Instagram
              </div>
            </motion.div>
          </div>

          <div className='flex justify-center justify-evenly '>
            <motion.div className='w-[30rem] h-[10rem]  bg-white rounded-xl'
            whileHover={{
              scale:1.05,
            }}
            whileTap={{ scale: 1 }}
            transition={{
              type:"spring",
              damping:"30",
              stiffness:900,
              duration:0.5
            }}
            >
              <div className='flex h-full justify-center items-center items-center gap-2 text-4xl font-bold cursor-pointer'>
                <AiOutlineMail size={"70px"}/> E-Mail
              </div>
            </motion.div>
            <motion.div className='w-[30rem] h-[10rem]  bg-white rounded-xl'
            whileHover={{
              scale:1.05,
            }}
            whileTap={{ scale: 1 }}
            transition={{
              type:"spring",
              damping:"30",
              stiffness:900,
              duration:0.5
            }}
            >
              <div className='flex h-full justify-center items-center items-center gap-2 text-4xl font-bold cursor-pointer'>
                <BsTelephone size={"60px"}/> Telefon Numarası
              </div>
            </motion.div>
          </div>
        </div> 
      </div>
    </motion.div>
  )
}

export default page
