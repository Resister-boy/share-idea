import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation addPost(
    $body: String!
    $image: String!
    $title: String!
    $user_id: ID!
    $subtitle: String!
    $tags_id: String!
    $topic_id: ID!
    $created_at: DateTime!
    $updated_at: DateTime!
  ) {
    insertPost(
      body: $body
      image: $image
      title: $title
      subtitle: $subtitle
      user_id: $user_id
      tags_id: $tags_id
      topic_id: $topic_id
      created_at: $created_at
      updated_at: $updated_at
    ) {
      body
      created_at
      updated_at
      id
      image
      title
      subtitle
      user_id
      tags_id
      topic_id
    }
  }  
`

export const ADD_TAG = gql`
  mutation addTag(
      $tag: String!
      $created_at: DateTime!
      $updated_at: DateTime!
    ) {
    insertTag(
      tag: $tag
      created_at: $created_at
      updated_at: $updated_at
      ) {
      id
      tag
      created_at
      updated_at
    }
  }
`

export const UPDATE_TAG_DATE = gql`
  mutation updateTagDate(
    $id: ID!
    $updated_at: DateTime!
  ) {
    updateTagDate(
      id: $id
      updated_at: $updated_at
    ) {
      id
      updated_at
    }
  }
`