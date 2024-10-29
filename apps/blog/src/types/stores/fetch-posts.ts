import type { ResponsePagination } from '~/types/api';
import type { Post } from '~/types/collections';

export type PostsResponse = {
  posts: Post[];
} & ResponsePagination;

export type FetchPostsState = {
  data: PostsResponse;
};
