<script setup lang="ts">
const postsStore = useFetchPostsStore();
const { data } = storeToRefs(postsStore);

const { execute, error } = useFetchPosts();
callOnce(execute);

useHead({
  title: 'Home page',
});
</script>

<template>
  <div v-if="error" :class="$style.posts">
    {{ error }}
  </div>

  <div v-else :class="$style.posts">
    <Post v-for="post in data.posts" :key="post.id" :post="post" />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.posts {
  display: flex;
  flex-direction: column;
  gap: var(--posts-gap);
  max-width: var(--posts-max-width);
  margin: 0 auto;
  padding: var(--margin-base);
}
</style>
