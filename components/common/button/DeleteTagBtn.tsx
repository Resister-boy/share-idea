import { DeleteIcon } from '@/components/icons';
import { deleteTag } from '@/lib/handleTagUtils';
import React, { Dispatch, SetStateAction } from 'react'

type Props = {
  setTagList: Dispatch<SetStateAction<string[] | null>>;
  deleteBtn: boolean;
  tagList: string[];
  tagName: string;
}

const DeleteTagBtn = ({ deleteBtn, setTagList, tagList, tagName }: Props) => {
  const handleDeleteBtn = () => {
    setTagList(deleteTag(tagList, tagName));
  }
  return (
    <div onClick={handleDeleteBtn}>
      <DeleteIcon  className={`${deleteBtn ? "block" : "hidden"} z-50 absolute top-1/2 left-1/2 shadow-md -translate-y-1/2 -translate-x-1/2`} />
    </div>
  )
}

export default DeleteTagBtn