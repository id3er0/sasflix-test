<script setup lang="ts">
import { getRandomPostDate } from '~/utils';

const props = defineProps<{
  id: number;
}>();

const randomDate = getRandomPostDate(props.id);
const dayjs = useDayjs();
const formatedDate = dayjs(randomDate).fromNow();

const capitalizedDate = computed(() => {
  return formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1);
});
</script>

<template>
  <div :class="$style.date">
    {{ capitalizedDate }}
  </div>
</template>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.date {
  @include text-small;

  color: var(--color-button-text);
  opacity: 0.2;
}
</style>
