export function useFetchPosts() {
  const store = useFetchPostsStore();

  return useAsyncData('fetch-posts', async () => {
    await store.fetchData();
    return store.data;
  }, {
    lazy: true,
  });
}
