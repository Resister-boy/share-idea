import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={`/`}>
      <div className='w-30 flex items-center justify-center flex-shrink-0 cursor-pointer'>
        <span className='font-mono font-bold text-xl'>
          Share IDEA
        </span>
      </div>
    </Link>
  )
}

export default Logo