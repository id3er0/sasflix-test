import { defineStore } from 'pinia';
import type { ReactionsValues } from '~/constants';
import type { Post } from '~/types/collections';
import type { PostReactionsState } from '~/types/stores';

export const usePostReactionsStore = defineStore('post-reactions', {
  persist: true,
  state: (): PostReactionsState => ({
    reactions: {},
  }),
  actions: {
    setReaction(postId: Post['id'], reaction: ReactionsValues | false) {
      const savedReaction = this.reactions[postId];

      if (reaction === false || savedReaction === reaction) {
        if (savedReaction) {
          this.$patch((state) => {
            delete state.reactions[postId];
          });
        }
        return;
      }

      this.$patch((state) => {
        state.reactions[postId] = reaction;
      });
    },
  },
});
