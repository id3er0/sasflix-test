import type { Post } from '~/types/collections';

export function useFetchPost(postId: Post['id']) {
  const store = useFetchPostStore();

  return useAsyncData(`fetch-post-${postId}`, async () => {
    await store.fetchData(postId);
    return store.data;
  }, {
    watch: [() => postId],
    lazy: true,
  });
}
