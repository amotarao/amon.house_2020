<template>
  <component :is="tag" :class="$style.button" v-bind="attrs" v-on="$listeners"><slot /></component>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
  },
  computed: {
    tag(): string {
      if (this.to !== null) {
        return 'nuxt-link';
      }
      if (this.href !== null) {
        return 'a';
      }
      return 'button';
    },
    isExternalLink(): boolean {
      if (this.href === null) {
        return false;
      }
      return /^https?:\/\//.test(this.href);
    },
    attrs(): object {
      if (this.to !== null) {
        return {
          ...this.$attrs,
          to: this.to,
        };
      }
      if (this.href !== null) {
        if (this.isExternalLink) {
          return {
            ...this.$attrs,
            href: this.href,
            target: '_blank',
            rel: 'noopener',
          };
        }
        return {
          ...this.$attrs,
          href: this.href,
        };
      }
      return this.$attrs;
    },
  },
});
</script>

<style lang="scss" module>
.button {
  border: 2px solid;
  border-radius: 4px;
  display: inline-block;
  font-family: 'Roboto';
  font-size: 1.25rem;
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

  @mixin with-color($main, $sub) {
    border-color: $main;
    background-image: linear-gradient(150deg, $main 50%, $sub 50%);
    color: $sub;

    &:hover {
      color: $main;
    }
  }

  &[data-type~='twitter'] {
    @include with-color($twitter, #fafafa);
  }

  &[data-type~='github'] {
    @include with-color($github, #fafafa);
  }

  &[data-type~='site'] {
    @include with-color($primary, #fafafa);
  }

  &[data-size='small'] {
    font-size: 1rem;
  }
}
</style>
