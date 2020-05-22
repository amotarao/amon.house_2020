<template>
  <div :class="$style.container">
    <h1 :class="$style.code">{{ error.statusCode || 500 }}</h1>
    <nuxt-link :class="$style.link" to="/">ホーム</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { NuxtError } from '@nuxt/types';

export default Vue.extend({
  layout: 'default',
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
  font-family: 'Roboto';
}

.link {
  border: 2px solid;
  border-radius: 4px;
  display: inline-block;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5em 2em;
  text-decoration: none;
  transition: all 0.3s ease-out;

  background-origin: border-box;
  background-size: calc(200% + 5em) 100%;
  background-position: 0 0;

  &:hover {
    background-position: 100% 100%;
  }

  $base-color: #252525;
  $sub-color: #fff;

  border-color: $base-color;
  background-image: linear-gradient(150deg, $base-color 50%, $sub-color 50%);
  color: $sub-color;

  &:hover {
    color: $base-color;
  }
}
</style>
