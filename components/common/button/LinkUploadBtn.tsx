import React from 'react'
import { LinkIcon } from './../../icons'

const LinkUploadBtn = () => {
  return (
    <div className='px-1 py-1 hover:bg-gray-100 rounded-md'>
      <LinkIcon className={`${'cursor-pointer text-gray-200'}`} width={30} height={30} />
    </div>
  )
}

export default LinkUploadBtn