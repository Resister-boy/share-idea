import Link from 'next/link';
import React from 'react'

type Props = {
  idx: number;
  tag: string;
}

const rankingIcon = (idx: number): string => {
  switch (idx) {
    case 1:
      return ('🥇');
    case 2:
      return ('🥈');
    case 3:
      return ('🥉');
    case 4: 
      return ('4️⃣');
    case 5:
      return ('5️⃣');
    case 6: 
      return ('6️⃣');
    case 7:
      return ('7️⃣');
    case 8:
      return ('8️⃣');
    case 9:
      return ('9️⃣');
    default:
      return ('🔟');
  }
}

const TagBadge = ({ idx, tag }: Props) => {
  return (
    <Link
      href={`/tag/${tag.split(' ').join('-')}`}
      className='w-full h-10 px-2 font-semibold flex justify-start items-center rounded-md hover:bg-gray-200 hover:cursor-pointer'>
      <span className='mr-2'>
        {rankingIcon(idx + 1)}
      </span>
      <span className='text-md'>
        {tag}
      </span>
    </Link>
  )
}

export default TagBadge