import { defineStore } from 'pinia';
import { API_PATH } from '~/constants';
import type { CommentsResponse, FetchCommentsState } from '~/types/stores';

export const useFetchCommentsStore = defineStore('fetch-comments', {
  state: (): FetchCommentsState => ({
    data: {
      comments: [],
      total: 0,
      skip: 0,
      limit: 0,
    },
  }),
  getters: {
    clearedComments: (state) => {
      const deleteCommentsStore = useDeleteCommentsStore();
      const { deletedComments } = storeToRefs(deleteCommentsStore);

      return state.data.comments.filter(comment => !deletedComments.value.includes(comment.id));
    },
  },
  actions: {
    async fetchData(postId: number) {
      this.$reset();

      const { $fetchApi } = useNuxtApp();

      const response = await $fetchApi<CommentsResponse>(API_PATH.POST_COMMENTS.replace('{id}', String(postId)));

      this.$patch((state) => {
        state.data = response;
      });
    },
  },
});
