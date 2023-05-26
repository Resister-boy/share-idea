import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Topic } from './topic'
import { handleTopicByInput } from '@/lib/handleTopicUtils';
import { topics } from './topic'

type Props = {
  setPostTopic: Dispatch<SetStateAction<string>>
  postTopic: string;
  setSortTopic: Dispatch<SetStateAction<Topic[]>>;
  sortTopic: Topic[]
}

const TopicSearchRecommand = ({ postTopic, setPostTopic, sortTopic, setSortTopic }: Props ) => {
  useEffect(() => {
    setSortTopic(handleTopicByInput(topics, postTopic));
  }, [postTopic]);
  return (
    <div className={`absolute top-[58px] left-0 px-2 py-2 mx-2 flex flex-wrap 
      bg-gray-200 rounded-md 
      ${(sortTopic.length !== 1 || postTopic !== sortTopic[0].topic) || "hidden"}`}>
      {sortTopic.map((topic) => {
        return (
          <div
            onClick={() => setPostTopic(topic.topic)}
            key={topic.id} 
            className='px-3 py-1 hover:cursor-pointer hover:bg-gray-300 rounded-md'>
            <span>{topic.topic}</span>
          </div>
        )
      })}
    </div>
  )
}

export default TopicSearchRecommand