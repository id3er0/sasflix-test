import { defineStore } from 'pinia';
import { API_PATH } from '~/constants';
import type { FetchPostsState, PostsResponse } from '~/types/stores';

export const useFetchPostsStore = defineStore('fetch-posts', {
  state: (): FetchPostsState => ({
    data: {
      posts: [],
      total: 0,
      skip: 0,
      limit: 0,
    },
  }),
  actions: {
    async fetchData() {

      const { $fetchApi } = useNuxtApp();

      const response = await $fetchApi<PostsResponse>(API_PATH.POSTS, {
        query: {
          limit: 5,
        },
      });

      this.$patch((state) => {
        state.data = response;
      });
    },
  },
});
