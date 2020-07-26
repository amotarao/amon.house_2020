<template>
  <div :class="$style.container">
    <nuxt-link v-if="$route.path !== '/'" to="/" :class="$style.home">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" aria-label="ホームにもどる">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </nuxt-link>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    canonicalLink(): string {
      const path = `${this.$route.path}`.replace(/\/+/g, '/').replace(/(^\/|\/$)/g, '');
      return `https://amon.house/${path}`;
    },
  },
  head() {
    return {
      link: [{ hid: 'canonical', rel: 'canonical', href: (this as any).canonicalLink }],
    };
  },
});
</script>

<style lang="scss" module>
.container {
  height: 100%;
}

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $bg2;
  border-radius: 4px;
  color: $text;
  position: fixed;
  top: 16px;
  left: 16px;
  height: 48px;
  width: 48px;
  z-index: 999;

  svg {
    fill: currentColor;
  }
}
</style>
