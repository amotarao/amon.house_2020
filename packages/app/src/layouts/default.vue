<template>
  <nuxt />
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
