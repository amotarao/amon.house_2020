<template>
  <nuxt />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head() {
    const canonicalLink = `https://amotarao.dev/${this.$route.path}/`.replace(/\/+$/, '/');

    return {
      link: [{ hid: 'canonical', rel: 'canonical', href: canonicalLink }],
    };
  },
});
</script>
