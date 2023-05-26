export type Comment = {
  created_at: string;
  id: number;
  post_id: number;
  comment: string;
  username: string;
}

export type Vote = {
  created_at: string;
  id: number;
  post_id: number;
  upvote: boolean;
  username: string;
}

export type Tag = {
  created_at: string;
  updated_at: string;
  id: number;
  tag: string;
}

export type PostType = {
  user_id: number;
  body: string;
  created_at: string;
  id: number;
  image: string;
  title: string;
  subtitle: string;
  votes: Vote[] | null;
  comments: Comment[] | null;
  tags: Tag[] | null;
}