import { Dispatch, SetStateAction } from "react";
import client from "@/apollo-client";
import { GET_TAG_BY_TAGNAME } from "@/components/graphql/queries";
import { ADD_TAG, UPDATE_TAG_DATE } from "@/components/graphql/mutations";

export const addTagList = (tag: string, setTagList: Dispatch<SetStateAction<string[] | null>>, tagList: string[] | null): boolean => {
  let temp: string[] = tagList || [];

  if (tagList?.includes(tag) || !tag.length || !tag.trim()) {
    console.log(tag, 'already exist');
    return (false);
  } else {
    temp.push(tag.trim());
    setTagList(temp);
  }
  return (true);
}

export const deleteTag = (tagList: string[], tagName: string) => {
  let newList: string[] = [];
  tagList.filter((tag) => {
    if (tag !== tagName) {
      newList.push(tag.toLowerCase())
    }
  })
  return (newList);
}

export const checkValidTag = async (tagList: string[] | null) => {
  let verifiedTag: string[] = [];

  if (tagList === null)
    return ;
    for (let i = 0; i < tagList.length; i++) {
      const { data: getTagByTagName } = await client.query({
        query: GET_TAG_BY_TAGNAME,
        variables: {
          tag: tagList[i]
        }
    })
    if (!getTagByTagName.tagByTagName.length) {
      const { data: addTag } = await client.mutate({
        mutation: ADD_TAG,
        variables: {
          tag: tagList[i],
          created_at: new Date(),
          updated_at: new Date(),
        }
      })
      verifiedTag.push(addTag);
    } else {
      const { data: updateTagDate } = await client.mutate({
        mutation: UPDATE_TAG_DATE,
        variables: {
          id: getTagByTagName.tagByTagName[0].id,
          updated_at: new Date()
        }
      })
      verifiedTag.push(getTagByTagName.tagByTagName[0].id);
    }
  }
  return (verifiedTag.join(','));
}