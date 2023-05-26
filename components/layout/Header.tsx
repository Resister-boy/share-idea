import React from 'react';
import Image from 'next/image';
import { DownIcon, HomeIcon } from './../icons';
import { useSession } from 'next-auth/react';
import LogOut from './../auth/LogOut';
import LogIn from './../auth/LogIn'
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import Logo from './Logo';

const Header = () => {
  const { data: session } = useSession();
  return (
    <main className='sticky w-full top-0 z-50 flex bg-white px-12 py-2 shadow-sm items-center'>
      <Logo />
      <div className='w-3/4 mx-auto ml-16 flex items-center justify-between'>
        <SearchBar />
        <Navigation />
      </div>
      {session ? (
        <LogOut />
      ) : (
        <LogIn />
      )}
    </main>
  )
}

export default Header