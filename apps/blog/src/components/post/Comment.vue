<script setup lang="ts">
import { useTimeoutFn } from '@vueuse/core';
import type { Comment } from '~/types/collections';

const props = defineProps<{
  comment: Comment;
}>();

const { t } = useI18n();

const deleteCommentsStore = useDeleteCommentsStore();
const { markCommentAsDeleted } = deleteCommentsStore;

const deleteComment = useTimeoutFn(() => {
  return markCommentAsDeleted(props.comment.id);
}, 3000, { immediate: false });
</script>

<template>
  <div :class="$style.comment">
    <div :class="$style.image">
      <IconUser />
    </div>

    <div :class="$style.main">
      <div :class="$style.user">
        {{ props.comment.user?.fullName || props.comment.user?.username }}
      </div>

      <div v-if="!deleteComment.isPending.value" :class="$style.body">
        {{ props.comment.body }}
      </div>

      <div v-else :class="$style.deleteWarning">
        <span>{{ t('deleted_comment') }}</span>

        <button :class="$style.deleteWarningAction" type="button" @click="deleteComment.stop">
          {{ t('revert') }}
        </button>
      </div>

      <div :class="$style.footer" :data-hide="deleteComment.isPending.value">
        <Date :id="comment.id" />
        <button :class="$style.action" type="button" @click="deleteComment.start">
          {{ t('delete') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.comment {
  display: flex;
  gap: var-x(--spacing-base, 2);
}

.image {
  flex: 0 0 var-x(--spacing-base, 12);
}

.main {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: var-x(--spacing-base, 2);
}

.user {
  @include text-body;

  font-weight: 600;
  line-height: 1;
}

.body {
  @include text-body;
}

.deleteWarning {
  @include text-body;

  display: flex;
  flex-wrap: wrap;
  gap: var-x(--spacing-base, 2);
}

.deleteWarningAction {
  @include reset-button;
  @include action-link;
  @include text-body;
}

.footer {
  display: flex;
  gap: var-x(--spacing-base, 5);
  align-items: center;
  margin-top: var(--spacing-base);
  transition: opacity 0.15s linear;

  &[data-hide="true"] {
    opacity: 0;
  }
}

.action {
  @include reset-button;
  @include action-link;

  & {
    --color: var(--color-action);
    --color-hover: var(--color-action);
  }
}
</style>
