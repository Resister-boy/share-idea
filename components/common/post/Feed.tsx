import { GET_ALL_POST } from '@/components/graphql/queries'
import { useQuery } from '@apollo/client'
import React from 'react'
import { PostType } from '@/typings'
import Post from './Post'

type Props = {
  topic?: string;
}

const Feed = ({ topic }: Props ) => {
  const { data, error } = useQuery(GET_ALL_POST) 
  console.log(data);
  console.log(error);
  const posts: PostType[] = data?.postList;
  return (
    <div className='w-full mx-auto'>
      {posts?.map(post => (
        <Post 
          key={post.id} 
          post={post}
        />
      ))}
    </div>
  )
}

export default Feed