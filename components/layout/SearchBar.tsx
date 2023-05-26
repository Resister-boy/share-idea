import React from 'react'
import { SearchIcon } from '../icons'

const SearchBar = () => {
  return (
    <>
      <form className='flex flex-1 items-center space-x-2 border border-gray-200
      bg-gray-100 px-3 py-1 rounded-md'>
        <SearchIcon className='w-6 h-6 text-gray-400' />
        <input 
          className='flex-1 py-1 bg-transparent outline-none'
          type="text" 
          placeholder='Search New Ideas!' />
        <button type='submit' hidden />
      </form>
    </>
  )
}

export default SearchBar