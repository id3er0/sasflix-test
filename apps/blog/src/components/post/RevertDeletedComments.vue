<script setup lang="ts">
import type { Post } from '~/types/collections';

const props = defineProps<{
  postId: Post['id'];
}>();

const { t } = useI18n();

const deleteCommentsStore = useDeleteCommentsStore();
const { hasDeletedCommentsForPost } = deleteCommentsStore;
const show = computed(() => hasDeletedCommentsForPost(props.postId));
</script>

<template>
  <button v-if="show" :class="$style.action" type="button" @click="deleteCommentsStore.$reset">
    {{ t('revert_comments') }}
  </button>
</template>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.action {
  @include reset-button;
  @include action-link;
}
</style>
