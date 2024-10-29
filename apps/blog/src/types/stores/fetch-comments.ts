import type { ResponsePagination } from '~/types/api';
import type { Comment } from '~/types/collections';

export type CommentsResponse = {
  comments: Comment[];
} & ResponsePagination;

export type FetchCommentsState = {
  data: CommentsResponse;
};
