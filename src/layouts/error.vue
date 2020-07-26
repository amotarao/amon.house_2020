<template>
  <div :class="$style.container">
    <h1 :class="$style.code">{{ error.statusCode || 500 }}</h1>
    <basic-button to="/" data-type="sub" data-size="small">ホーム</basic-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { NuxtError } from '@nuxt/types';
import BasicButton from '@/components/atoms/BasicButton.vue';

export default Vue.extend({
  layout: 'default',
  components: {
    BasicButton,
  },
  props: {
    error: {
      type: Object as () => NuxtError,
      required: true,
    },
  },
});
</script>

<style lang="scss" module>
.container {
  margin: 0 auto;
  padding: 2rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > * {
    margin-bottom: 1rem;
  }
}

.code {
  font-size: 8rem;
  font-family: 'Roboto', sans-serif;
}
</style>
