import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { LoginIcon } from '../icons'

const LogOut = () => {
  const { data: session } = useSession();
  return (
    <div onClick={() => signOut()} className='hidden items-center space-x-2 border hover:cursor-pointer border-gray-200 rounded-lg p-2 lg:flex'>
      <div className='h-5 w-5 flex-shrink-0'>
        <LoginIcon width={25} height={25} />
      </div>
      <div className='flex-1 text-xs'>
        <p className='truncate'>{session?.user?.name}</p>
        <p className='text-black'>Sign Out</p>
      </div>
    </div>
  )
}

export default LogOut