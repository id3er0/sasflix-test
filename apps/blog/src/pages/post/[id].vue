<script setup lang="ts">
const postStore = useFetchPostStore();
const { getPost } = postStore;

const route = useRoute();
const postId = +route.params.id;
const post = computed(() => getPost(postId));

const { execute, status, error } = useFetchPost(postId);
callOnce(execute);
</script>

<template>
  <SkeletonPost v-if="status === 'pending' && !post" :class="$style.component" />

  <div v-else-if="error" :class="$style.component">
    {{ error }}
  </div>

  <div v-else-if="post" :class="$style.component">
    <Title v-if="post.title">
      {{ post.title }}
    </Title>

    <Post is-page :post="post" />

    <PostComments :post="post" />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.component {
  @include section;
}
</style>
