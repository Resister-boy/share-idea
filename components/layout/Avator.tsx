import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image';

type Props = {
  seed?: string;
  large?: boolean;
}

const Avator = ({ seed, large }: Props) => {
  const { data: session } = useSession();
  return (
    <div className={`h-10 w-10 overflow-hidden rounded-full border-gray-300 bg-white ${large && 'h-20 w-20'}`}>
      <Image 
        src={"/assets/Ghost.png"}
        alt='profile'
        width={50}
        height={50}
        className='rounded-full'
      />
    </div>
  )
}

export default Avator