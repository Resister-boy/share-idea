import React, { Dispatch, SetStateAction } from 'react'
import Tag from './Tag'

type Props = {
  tagList: string[] | null;
  setTagList: Dispatch<SetStateAction<string[] | null>>;
}

const TagList = ({ tagList, setTagList }: Props ) => {
  return (
    <div className='flex justify-start items-center py-2 px-2'>
      {tagList?.map((t, i) => {
        return (
          <Tag
            key={i}
            tag={t}
            tagList={tagList}
            setTagList={setTagList}
          />
        )
      })}
    </div>
    )
}

export default TagList