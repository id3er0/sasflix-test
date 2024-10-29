<script setup lang="ts">
import type { Post } from '~/types/collections';

const props = defineProps<{
  post: Post;
}>();

const localeRoute = useLocaleRoute();
const { t } = useI18n();
</script>

<template>
  <NuxtLink :class="$style.button" :to="localeRoute({ name: 'post-id', params: { id: props.post.id } })">
    {{ t('open_comments') }}
  </NuxtLink>
</template>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.button {
  @include action-link;
}
</style>
