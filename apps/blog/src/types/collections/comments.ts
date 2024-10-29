import type { User } from '~/types/collections';

export type Comment = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
};
