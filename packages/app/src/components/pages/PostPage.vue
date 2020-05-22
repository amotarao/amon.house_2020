<template>
  <article :class="$style.wrapper">
    <h1 :class="$style.title">{{ title }}</h1>
    <div :class="$style.date">
      <span>
        <time :datetime="createdAt.toISOString()">{{ createdAtStr }} 投稿</time>
      </span>
      <template v-if="isUpdated">
        <span :class="$style.separator">/</span>
        <span>
          <time :datetime="updatedAt.toISOString()">{{ updatedAtStr }} 更新</time>
        </span>
      </template>
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <section :class="$style.contents" v-html="body"></section>
  </article>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { formatDate } from '@/utils/date';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    } as PropOptions<Date>,
    updatedAt: {
      type: Date,
      required: true,
    } as PropOptions<Date>,
  },
  computed: {
    createdAtStr(): string {
      return formatDate(this.createdAt);
    },
    updatedAtStr(): string {
      return formatDate(this.updatedAt);
    },
    isUpdated(): Boolean {
      return this.createdAtStr !== this.updatedAtStr;
    },
  },
});
</script>

<style lang="scss" module>
.wrapper {
  margin: auto;
  padding: 120px 16px;
  max-width: 100%;
  width: 640px;
}

.title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.date {
  display: flex;
  flex-wrap: wrap;
  color: $sub;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 4rem;

  span {
    display: block;
  }
}

.separator {
  margin: 0 0.5em;
}

.contents {
  font-size: 1rem;
  line-height: 1.7;

  > * + * {
    margin-top: 24px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
