import type { Post } from '~/types/collections';

export type PostResponse = Post;

export type FetchPostState = {
  data: Record<Post['id'], PostResponse>;
};
