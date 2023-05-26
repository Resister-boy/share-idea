import React, { Dispatch, SetStateAction, useState } from 'react'
import TopicSearchRecommand from './TopicSearchRecommand'
import { Topic } from './topic';
import { topics } from './topic'


type Props = {
  setPostTopic: Dispatch<SetStateAction<string>>;
  postTopic: string;
}

const TopicInput = ({ postTopic, setPostTopic }: Props ) => {
  const [sortTopic, setSortTopic] = useState<Topic[]>(topics);
  const [showRecommand, setShowRecommand] = useState<boolean>(false);
  return (
    <div className='flex flex-wrap relative'>
      <input
        type="text"
        className='flex-1 mt-4 mx-2 rounded-md p-2 border border-gray-200'
        placeholder={'Select a Topic'}
        onFocus={() => setShowRecommand(true)}
        onChange={(event) => setPostTopic(event.currentTarget.value)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setShowRecommand(false);
          } else if (event.key === 'Enter') {
            setPostTopic(sortTopic[0].topic);
          }
        }}
        value={postTopic}
      />
      {showRecommand && (
        <TopicSearchRecommand
          postTopic={postTopic}
          setPostTopic={setPostTopic}
          sortTopic={sortTopic}
          setSortTopic={setSortTopic}
        />
      )}
    </div>
  )
}

export default TopicInput