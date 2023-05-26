import TrendModal from '@/components/common/modal/TrendModal';
import PostBox from '@/components/common/post/PostBox'
import RecentTag from '@/components/common/tag/RecentTag';
import { GET_RECENT_TAG } from '@/components/graphql/queries';
import { useQuery } from '@apollo/client';
import Head from 'next/head';
import React, { useState } from 'react'

const Create = () => {
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const [clickPost, setClickPost] = useState<boolean>(false);
  const { data: recentTagList } = useQuery(GET_RECENT_TAG);
  console.log(recentTagList)
  return (
    <>
      <Head>
        <title>Create Post</title>
      </Head>
      <main className={`w-4/5 mx-auto flex relative ${clickPost && "select-none"}`}>
        {isUpload && <TrendModal />}
        <div className='w-2/3 pr-12'>
          <div className='mt-16 pb-3 flex items-center border-b-2 border-[#fff] min-w-md'>
            <h2 className='font-semibold text-2xl ml-2 text-[#333]'>
              Create new Post! 📜
            </h2>
            &nbsp;
          </div>
          <div className='mt-8'>
            <PostBox 
              setIsUpload={setIsUpload}
              clickPost={clickPost}
              setClickPost={setClickPost}
            />
          </div>
        </div>
        <div className='w-1/3 flex items-start ml-4'>
          <div className='mt-28 w-full bg-white rounded-lg'>
            <h2 className='text-center font-semibold text-xl mt-4'>Trend topic! 🚀</h2>
            <RecentTag
              tagList={recentTagList?.recentTagList}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Create