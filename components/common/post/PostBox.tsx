import React, { Dispatch, SetStateAction, useState } from 'react'
import Avator from './../../layout/Avator';
import ImgUploadBtn from '../button/ImgUploadBtn';
import LinkUploadBtn from '../button/LinkUploadBtn';
import AddTagBtn from '../button/AddTagBtn';
import { addTagList, checkValidTag } from '@/lib/handleTagUtils';
import { ADD_POST } from '@/components/graphql/mutations';
import TagList from '@/components/etc/TagList';
import { useMutation } from '@apollo/client';
import toast from 'react-hot-toast';
import TopicInput from '../topic/TopicInput';
import { TopicMap } from '../topic/topic';

type Props = {
  setIsUpload: Dispatch<SetStateAction<boolean>>;
  clickPost: boolean;
  setClickPost: Dispatch<SetStateAction<boolean>>;
}



const PostBox = ({ setIsUpload, clickPost, setClickPost }: Props ) => {
  const [postTitle, setPostTitle] = useState<string>("");
  const [postSubTitle, setPostSubTitle] = useState<string>("");
  const [postImage, setPostImage] = useState<string>("");
  const [postBody, setPostBody] = useState<string>("");
  const [postTopic, setPostTopic] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [tagList, setTagList] = useState<string[] | null>(null);
  const [ addPost ] = useMutation(ADD_POST);
  const handleAddTagList = () => {
    if (addTagList(tag, setTagList, tagList)) {
      setTag("");
    }
  }
  const submitPost = async () => {
    setClickPost(true);
    console.log(TopicMap[postTopic])
    const notification = toast.loading("Creating new Post...");
    try {
      const tags = await checkValidTag(tagList);
      const { data: { insertPost: newPost }} = await addPost({
        variables: {
          body: postBody,
          image: postImage,
          title: postTitle,
          user_id: 1,
          subtitle: postSubTitle,
          tags_id: tags,
          topic_id: TopicMap[postTopic],
          created_at: new Date(),
          updated_at: new Date()
        }
      })
      console.log(newPost)
      toast.success("New Post Created!", {
        id: notification
      });
      setIsUpload(true);
    } catch (error) {
      toast.error("Whoops! somethings wrong 😭", {
        id: notification
      })
      setClickPost(false);
    }
  }
  return (
    <>
      <main className='sticky top-16 z-40 bg-white border border-gray-300 rounded-md p-2'>
        <div className='flex items-center space-x-3'>
          <Avator />
          <input
            type="text"
            disabled={clickPost}
            className='flex-1 rounded-md p-2 border border-gray-200'
            placeholder={'Create a Post!'}
            onChange={(event) => setPostTitle(event.currentTarget.value)}
          />
          <ImgUploadBtn />
          <LinkUploadBtn />
        </div>
        <div>
          <TopicInput
            postTopic={postTopic}
            setPostTopic={setPostTopic}
          />
        </div>
        <div className='flex flex-col py-2'>
          <div className='flex items-center'>
            <input 
              type="text"
              disabled={clickPost}
              className='m-2 flex-1 p-2 border border-gray-200 rounded-lg'
              placeholder='Subtitle' 
              onChange={(event) => setPostSubTitle(event.currentTarget.value)}
              />
          </div>
          <div className='flex items-center'>
            <textarea
              name="body" 
              disabled={clickPost}
              placeholder='Share your own idea' 
              className='w-full h-32 bg-gray-100 m-2 p-2 border border-gray-200 resize-none rounded-lg'
              maxLength={240}
              onChange={(event) => setPostBody(event.currentTarget.value)}
            />
          </div>
          <div className='text-xs flex items-center justify-end px-2 text-gray-500'>
            {`${postBody.length} / 240`}
          </div>
          <form className='flex items-center mt-4'>
          <input
              type='text'
              disabled={clickPost}
              placeholder='Add Tag'
              className='flex-1 ml-2 mr-2 mb-2 bg-gray-100 p-2 border border-gray-200 rounded-lg'
              onChange={(event) => {
                setTag(event.target.value)
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleAddTagList();
                  event.currentTarget.value = "";
                }
              }}
            />
            <AddTagBtn
              setTag={setTag}
              tag={tag}
              setTagList={setTagList}
              tagList={tagList}
            />
          </form>
          <TagList
            tagList={tagList}
            setTagList={setTagList}
          />
        </div>
        <button 
          onClick={submitPost}
          className='w-full h-10 flex justify-center items-center bg-blue-400 text-white 
          text-lg rounded-lg border border-blue-400 hover:bg-white hover:text-blue-400 duration-100 hover:font-semibold'>
            Create Post
        </button>
      </main>
    </>
    )}

export default PostBox