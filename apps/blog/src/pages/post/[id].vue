<script setup lang="ts">
const postStore = useFetchPostStore();
const { getPost } = postStore;

const route = useRoute();
const postId = +route.params.id;
const post = computed(() => getPost(postId));

const { execute, error } = useFetchPost(postId);
callOnce(execute);
</script>

<template>
  <div v-if="error" :class="$style.post">
    {{ error }}
  </div>

  <div v-else-if="post" :class="$style.post">
    <Title v-if="post.title">
      {{ post.title }}
    </Title>

    <Post is-page :post="post" />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.post {
  display: flex;
  flex-direction: column;
  gap: var-x(--posts-gap);
  max-width: var(--posts-max-width);
  margin: 0 auto;
  padding: var(--margin-base);
}
</style>
