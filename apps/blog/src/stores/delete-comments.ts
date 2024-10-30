import { defineStore } from 'pinia';
import type { Comment, Post } from '~/types/collections';

import type { DeleteCommentsState } from '~/types/stores';

export const useDeleteCommentsStore = defineStore('delete-comments', {
  state: (): DeleteCommentsState => ({
    deletedComments: [],
  }),
  persist: true,
  getters: {
    hasDeletedCommentsForPost: state => (postId: Post['id']) => {
      const fetchCommentsStore = useFetchCommentsStore();
      const { data: { comments } } = fetchCommentsStore;

      // Find if there are comments deleted from the post.
      return comments.some(comment =>
        comment.postId === postId && state.deletedComments.includes(comment.id),
      );
    },
  },
  actions: {
    markCommentAsDeleted(commentId: Comment['id']) {
      this.$patch((state) => {
        state.deletedComments.push(commentId);
      });
    },
  },
});
