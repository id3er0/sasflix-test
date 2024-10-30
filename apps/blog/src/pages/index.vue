<script setup lang="ts">
const postsStore = useFetchPostsStore();
const { data } = storeToRefs(postsStore);

const { execute, status, error } = useFetchPosts();
callOnce(execute);

useHead({
  title: 'Home page',
});
</script>

<template>
  <SkeletonPost v-if="status === 'pending' && data.total === 0" :posts="5" :rows="5" :class="$style.component" />

  <div v-else-if="error" :class="$style.component">
    {{ error }}
  </div>

  <div v-else :class="$style.component">
    <Post v-for="post in data.posts" :key="post.id" :post="post" />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.component {
  @include section;
}
</style>
