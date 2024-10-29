import { defineStore } from 'pinia';
import type { Comment } from '~/types/collections';

import type { DeleteCommentsState } from '~/types/stores';

export const useDeleteCommentsStore = defineStore('delete-comments', {
  state: (): DeleteCommentsState => ({
    deletedComments: [],
  }),
  actions: {
    markCommentAsDeleted(commentId: Comment['id']) {
      this.$patch((state) => {
        state.deletedComments.push(commentId);
      });
    },
  },
});
