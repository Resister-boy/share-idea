import { gql } from "@apollo/client";

export const GET_TAG_BY_TAGNAME  = gql`
  query getTagByTagName($tag: String!) {
    tagByTagName(tag: $tag) {
      id
      tag
    }
  }
`

export const GET_ALL_POST = gql`
  query getAllPost {
    postList {
      body
      created_at
      id
      image
      title
      user_id
      subtitle
    }
  }
`

export const GET_RECENT_TAG = gql`
  query getRecentTag {
    recentTagList {
      id
      tag
      updated_at
      created_at
    }
  }
`
