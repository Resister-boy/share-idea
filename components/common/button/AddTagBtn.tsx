import React, { Dispatch, SetStateAction } from 'react'
import { PlusIcon } from '@/components/icons'
import { addTagList } from '@/lib/handleTagUtils';

type HandleTagType = {
  setTag: Dispatch<SetStateAction<string>>;
  tag: string;
  setTagList: Dispatch<SetStateAction<string[] | null>>;
  tagList: string[] | null;
}

const AddTagBtn = ({ setTag, tag, setTagList, tagList }: HandleTagType ) => {
  const handleAddTagList = () => {
    if (addTagList(tag, setTagList, tagList)) {
      setTag("")
    }
  }
  return (
    <button type='reset' onClick={handleAddTagList} className='hover:bg-gray-100 hover:cursor-pointer p-2 rounded-md'>
      <PlusIcon />
    </button>
  )
}

export default AddTagBtn