<!-- This file moved from `/components/post` directory because of issue with island import in Nuxt.  -->

<script setup lang="ts">
import { REACTIONS } from '~/constants';

import type { Post } from '~/types/collections';

const props = defineProps<{
  post: Post;
}>();

const { t } = useI18n();

const postReactionsStore = usePostReactionsStore();
const { setReaction } = postReactionsStore;
const { reactions } = storeToRefs(postReactionsStore);

const reaction = computed(() => reactions.value?.[props.post.id]);
const likes = computed(() => (props.post?.reactions?.likes || 0) + (reaction.value === REACTIONS.LIKE ? 1 : 0));
const dislikes = computed(() => (props.post?.reactions?.dislikes || 0) + (reaction.value === REACTIONS.DISLIKE ? 1 : 0));
</script>

<template>
  <div :class="$style.buttons">
    <button type="button" :class="$style.button" :data-reaction="REACTIONS.LIKE" :data-active="reaction === REACTIONS.LIKE || undefined" @click="setReaction(props.post.id, REACTIONS.LIKE)">
      <span :class="$style.buttonIcon">
        <IconLikeActive v-if="reaction === REACTIONS.LIKE" />
        <IconLike v-else />
      </span>
      <span>
        {{ t('like') }}
      </span>
      <span :class="$style.buttonCount">
        {{ likes }}
      </span>
    </button>

    <button type="button" :class="$style.button" :data-reaction="REACTIONS.DISLIKE" :data-active="reaction === REACTIONS.DISLIKE || undefined" @click="setReaction(props.post.id, REACTIONS.DISLIKE)">
      <span :class="$style.buttonIcon">
        <IconDislikeActive v-if="reaction === REACTIONS.DISLIKE" />
        <IconDislike v-else />
      </span>
      <span>
        {{ t('dislike') }}
      </span>
      <span :class="$style.buttonCount">
        {{ dislikes }}
      </span>
    </button>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.buttons {
  display: flex;
  gap: px-rem(4);
}

.button {
  @include reset-button;
  @include text-small;

  & {
    --color: var(--color-button-text);
    --height: #{px-rem(27)};
    --count-opacity: 0.3;

    display: flex;
    gap: var(--spacing-base);
    align-items: center;
    height: var(--height);
    padding: var-x(--spacing-base, 2);
    background-color: var(--color-button-background);
    color: var(--color);
    transition: all 0.15s linear;
  }

  &:first-child {
    padding-right: var-x(--spacing-base, 3);
    border-top-left-radius: var-x(--height, 0.5);
    border-bottom-left-radius: var-x(--height, 0.5);
  }

  &:last-child {
    padding-left: var-x(--spacing-base, 3);
    border-top-right-radius: var-x(--height, 0.5);
    border-bottom-right-radius: var-x(--height, 0.5);
  }

  &[data-active] {
    --color: var(--color-text-inverted);

    &[data-reaction="like"] {
      --count-opacity: 1;

      background-color: var(--color-action);
    }

    &[data-reaction="dislike"] {
      background-color: var(--color-button-text);
    }
  }
}

.buttonIcon {
  display: flex;
  flex: 0 0 px-rem(13);
  align-items: center;

  svg {
    width: px-rem(13);
    height: px-rem(11);
  }
}

.buttonCount {
  margin-left: var-x(--spacing-base, 0.5);
  opacity: var(--count-opacity);
}
</style>
