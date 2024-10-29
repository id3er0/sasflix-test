<template>
  <h1 :class="$style.header">
    <NuxtLink :class="$style.link" to="/">
      ikakprosto.ru
    </NuxtLink>
  </h1>
</template>

<style lang="scss" module>
@use '~/assets/styles/lib' as *;

.header {
  display: flex;
  justify-content: center;
  margin: 0;
  padding-top: var-x(--margin-base);
  padding-bottom: var-x(--margin-base, 3);
}

.link {
  color: var(--color-link);
  font-size: px-rem(40);
  font-weight: 700;
  font-style: normal;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  transition: color 0.25s linear;

  &:global(.router-link-exact-active) {
    cursor: default;
  }

  &:hover,
  &:active {
    &:global(:not(.router-link-exact-active)) {
      color: var(--color-link-hover);
    }
  }
}
</style>
