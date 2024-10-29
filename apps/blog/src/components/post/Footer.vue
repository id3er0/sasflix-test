<script setup lang="ts">
import type { Post } from '~/types/collections';

const props = defineProps<{
  post: Post;
  isPage?: boolean;
}>();
</script>

<template>
  <div :class="$style.footer">
    <PostCommentsButton v-if="!props.isPage" :post="props.post" />
    <Date :id="props.post.id" />
    <PostTags :post="props.post" />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.footer {
  display: flex;
  flex-wrap: wrap;
  gap: var-x(--spacing-base, 2);
  align-items: center;
}
</style>
