<script setup lang="ts">
import type { Post } from '~/types/collections';

const props = defineProps<{
  post: Post;
}>();

const commentsStore = useFetchCommentsStore();
const { clearedComments } = storeToRefs(commentsStore);

const { execute, status } = useFetchComments(props.post.id);
callOnce(execute);

const { t } = useI18n();
</script>

<template>
    <h3 :class="$style.heading">
      {{ clearedComments.length }} {{ t('comment', clearedComments.length) }}
    </h3>
  <div v-if="status === 'pending'">
    Loading...
  </div>
  <div v-else :class="$style.comments">

    <PostComment v-for="comment in clearedComments" :key="comment.id" :comment="comment" />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.comments {
  display: flex;
  flex-direction: column;
  gap: var-x(--spacing-base, 6);
}

.heading {
  @include text-heading;
}
</style>
