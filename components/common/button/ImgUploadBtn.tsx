import React from 'react'
import { ImageIcon } from './../../icons'

const ImgUploadBtn = () => {
  return (
    <>
     <div className='px-1 py-1 hover:bg-gray-100 rounded-md'>
        <ImageIcon             
          className={`${'cursor-pointer text-gray-200'}`}  />
      </div> 
    </>
  )
}

export default ImgUploadBtn