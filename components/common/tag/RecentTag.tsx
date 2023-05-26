import { Tag } from '@/typings'
import React from 'react'
import TagBadge from './TagBadge';

type Props = {
  tagList: Tag[] | undefined;
}

const RecentTag = ({ tagList }: Props) => {
  console.log(tagList)
  return (
    <div className='my-4 px-4'>
      {tagList?.map((tag, id) => {
        return (
          <TagBadge
            key={tag.id}
            idx={id}
            tag={tag.tag}
          />
        )
      })}
    </div>
  )
}

export default RecentTag