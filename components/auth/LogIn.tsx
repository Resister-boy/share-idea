import React from 'react'
import { signIn } from 'next-auth/react'
import { LoginIcon } from './../icons';

const LogIn = () => {
  return (
    <div onClick={() => signIn()} className='hidden items-center space-x-2 border hover:cursor-pointer border-gray-200 rounded-lg p-2 lg:flex'>
      <div className='h-5 w-5 flex-shrink-0'>
        <LoginIcon width={25} height={25} />
      </div>
    <p className='text-black'>Sign In</p>
  </div>
  )
}

export default LogIn