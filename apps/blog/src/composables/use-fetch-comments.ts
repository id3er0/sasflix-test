import type { Post } from '~/types/collections';

export function useFetchComments(postId: Post['id']) {
  const store = useFetchCommentsStore();

  return useAsyncData(`fetch-comments-${postId}`, async () => {
    await store.fetchData(postId);
    return store.data;
  }, {
    watch: [() => postId],
    lazy: true,
  });
}
