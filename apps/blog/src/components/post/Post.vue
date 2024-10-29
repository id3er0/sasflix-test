<script setup lang="ts">
import type { Post } from '~/types/collections';

const props = defineProps<{
  post: Post;
  isPage?: boolean;
}>();

const localeRoute = useLocaleRoute();
</script>

<template>
  <div :class="$style.post">
    <h2 v-if="props.post.title " :class="$style.heading">
      <NuxtLink v-if="!props.isPage" :class="$style.link" :to="localeRoute({ name: 'post-id', params: { id: props.post.id } })">
        {{ props.post.title }}
      </NuxtLink>
      <template v-else>
        {{ props.post.title }}
      </template>
    </h2>

    <div v-if="props.post.body" :class="$style.body">
      {{ props.post.body }}
    </div>

    <PostFooter :class="$style.footer" :is-page="isPage" :post="props.post" />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.post {
  display: flex;
  flex-direction: column;
  gap: var(--post-gap);
}

.heading {
  @include text-heading;
}

.link {
  color: var(--color-text);
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }
}

.body {
  @include text-body;
}

.footer {
  margin-top: var-x(--spacing-base, 2);
}
</style>
