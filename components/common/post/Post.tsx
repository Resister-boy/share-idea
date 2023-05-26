import { PostType } from '@/typings'
import React from 'react'
import Avator from './../../layout/Avator'
import ReactTimeago from 'react-timeago'
import VoteUpBtn from '../button/VoteUpBtn'
import VoteDownBtn from '../button/VoteDownBtn'
import { CommentIcon, SaveIcon, ShareIcon } from './../../icons'
import Link from 'next/link'

type Props = {
  post: PostType
}

const Post = ({ post }: Props) => {
  return (
    <Link href={`/post/${post.id}`}>
      <main className='rounded-md my-8 flex cursor-pointer border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600'>
        <div className='flex flex-col items-center justify-center space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400'>
          <VoteUpBtn />
          <p className='text-xs font-bold text-black'>0</p>
          <VoteDownBtn />
        </div>
        <div className='p-3 pb-1'>
          <div className='flex items-center space-x-2'>
            <Avator />
            <p className='text-xs text-gray-400'>
              {/* <span className='font-bold text-black hover:text-blue-900 hover:underline'
              >{post.tags[0]?.topic}</span> */}
              {/* • Posted by {post.username} */}
              <ReactTimeago date={post.created_at} />
            </p>
          </div>
          <div className='py-4'>
            <h2 className='text-xl font-semibold'>{post.title}</h2>
            <p className='mt-2 text-sm font-light'>{post.body}</p>
          </div>
          <div className='flex space-x-4 h-8 text-gray-400 mb-1'>
            <div className='flex items-center hover:bg-gray-100 px-1 rounded-md'>
              <CommentIcon className='w-5 ml-1' />
              <p className='text-xs mx-2'>{post.comments?.length} Comments</p>
            </div>
            <div className='flex items-center hover:bg-gray-100 px-1 rounded-md'>
              <ShareIcon className='w-5 ml-1' />
              <p className='text-xs mx-2'>Share</p>
            </div>
            <div className='flex items-center hover:bg-gray-100 px-1 rounded-md'>
              <SaveIcon className='w-5 ml-1' />
              <p className='text-xs mx-2'>Save</p>
            </div>
          </div>
        </div>
      </main>
    </Link>
    
  )
}

export default Post