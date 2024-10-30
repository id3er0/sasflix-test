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
  <SkeletonPost
    v-if="status === 'pending' && Array.isArray(clearedComments) && clearedComments.length === 0"
    variant="narrow"
  />

  <div v-else :class="$style.comments">
    <div :class="$style.heading">
      <h3 :class="$style.title">
        {{ clearedComments.length }} {{ t('comment', clearedComments.length) }}
      </h3>
      <TransitionGroup name="list">
        <PostRevertDeletedComments key="revert" :post-id="props.post.id" />
      </TransitionGroup>
    </div>

    <TransitionGroup name="list">
      <PostComment
        v-for="comment in clearedComments"
        :key="comment.id"
        :comment="comment"
      />
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/lib' as *;

.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease-in-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(20%);
}
</style>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.comments {
  display: flex;
  flex-direction: column;
  gap: var-x(--spacing-base, 6);
}

.heading {
  display: flex;
  gap: var-x(--spacing-base, 4);
  align-items: baseline;
}

.title {
  @include text-heading;
}
</style>
