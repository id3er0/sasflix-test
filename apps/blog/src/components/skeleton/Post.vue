<script setup lang="ts">
const { posts = 1, rows = 3 } = defineProps<{
  posts?: number;
  rows?: number;
  variant?: 'narrow';
}>();
</script>

<template>
  <div :class="$style.container" :data-variant="variant">
    <div v-for="p in posts" :key="p" :class="$style.skeleton">
      <div :class="[$style.row, $style._heading]" />

      <div v-for="r in rows" :key="r" :class="$style.row" />
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.container {
  display: flex;
  flex-direction: column;
  gap: px-rem(8);

  &[data-variant='narrow'] {
    max-width: 40%;
  }
}

.skeleton {
  display: flex;
  flex-direction: column;
  gap: var-x(--spacing-base, 2);
}

.row {
  height: var-x(--spacing-base, 4);
  border-radius: px-rem(4);
  background-color: var(--color-skeleton-background);
  animation: pulse 1.5s infinite ease-in-out;

  &:nth-child(odd) {
    width: 60%;
  }

  &:nth-child(even) {
    width: 80%;
  }

  &:nth-child(2) {
    width: 90%;
  }

  &._heading {
    width: 40%;
    height: var-x(--spacing-base, 8);
    margin-bottom: var-x(--spacing-base, 2);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}
</style>
