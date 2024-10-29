import { defineStore } from 'pinia';
import { API_PATH } from '~/constants';
import type { Post } from '~/types/collections';
import type { FetchPostState, PostResponse } from '~/types/stores/fetch-post';

export const useFetchPostStore = defineStore('fetch-post', {
  state: (): FetchPostState => ({
    data: {},
  }),
  getters: {
    getPost: state => (postId: Post['id']) => state.data[postId],
  },
  actions: {
    async fetchData(postId: Post['id']) {

      const { $fetchApi } = useNuxtApp();
      const response = await $fetchApi<PostResponse>(API_PATH.POST.replace('{id}', String(postId)));

      this.$patch((state) => {
        state.data[postId] = response;
      });
    },
  },
});
