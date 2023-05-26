import React, { Dispatch, SetStateAction, useState } from 'react'
import DeleteTagBtn from '../common/button/DeleteTagBtn';

type Props = {
  tag: string;
  tagList: string[];
  setTagList: Dispatch<SetStateAction<string[] | null>>;
}

const Tag = ({ tag, tagList, setTagList }: Props) => {
  const [deleteBtn, setDeleteBtn] = useState<boolean>(false);
  return (
    <div 
      onMouseOver={() => setDeleteBtn(true)} 
      onMouseLeave={() => setDeleteBtn(false)} 
      className='relative bg-gray-100 rounded-lg py-1 px-3 mr-2 text-sm hover:cursor-pointer z-40'>
      <span className={`${deleteBtn && "opacity-30"}`}>{tag}</span>
      <DeleteTagBtn 
        deleteBtn={deleteBtn}
        setTagList={setTagList}
        tagList={tagList}
        tagName={tag}
      />
    </div>
  )
}

export default Tag