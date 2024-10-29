<script setup lang="ts">
import type { Post } from '~/types/collections';

const props = defineProps<{
  post: Post;
}>();
</script>

<template>
  <ul
    v-if="Array.isArray(props.post?.tags) && props.post.tags.length > 0"
    :class="$style.tags"
  >
    <li v-for="(tag, index) in props.post.tags" :key="index" :class="$style.tag">
      {{ tag }}
    </li>
  </ul>
</template>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.tags {
  display: flex;
  gap: px-rem(4);
  margin: 0;
  padding: 0;
  list-style: none;
}

.tag {
  @include text-small;

  --height: #{px-rem(18)};

  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-base);
  align-items: center;
  height: var(--height);
  padding: var-x(--spacing-base, 1);
  border-radius: px-rem(3);
  background-color: var(--color-tag-background);
  color: var(--color-button-text);
  transition: all 0.15s linear;

  &:first-child {
    --arrow-width: #{px-rem(10)};

    margin-left: var(--arrow-width);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 100%;
      bottom: 0;
      width: var(--arrow-width);
      background-color: var(--color-tag-background);
      clip-path: polygon(100% 0%, 100% 100%, 0% 50%);
    }
  }
}
</style>
