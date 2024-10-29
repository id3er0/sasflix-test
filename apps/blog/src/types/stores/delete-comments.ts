import type { Comment } from '~/types/collections';

export type DeleteCommentsState = {
  deletedComments: Comment['id'][];
};
