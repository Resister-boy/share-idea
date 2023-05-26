import React from 'react'
import Link from 'next/link'
import { BellIcon, SparkleIcon, ChatIcon, MenuIcon, AddPostIcon } from '../icons'

const Navigation = () => {
  return (
    <>
      <div className='flex items-center space-x-2 text-gray-500 mx-5 lg:inline-flex'>
        <SparkleIcon className='icon' color="#B5B5B5" />
        <ChatIcon className='icon' color='#B5B5B5' />
        <hr className='h-10 border border-gray-100' />
        <BellIcon className='icon' color="#B5B5B5" />
        <Link href={`/create`} className='flex items-center justify-center 
        rounded-md hover:bg-gray-100 px-1 py-1'>
          <AddPostIcon color='#B5B5B5' />
        </Link>
      </div>
      <div className='ml-5 flex items-center lg:hidden'>
        <MenuIcon className='icon' color='#B5B5B5' />
      </div>
    </>
  )
}
export default Navigation