<template>
  <nuxt-link :class="$style.card" :to="`/posts/${id}`">
    <div :class="$style.thumbnail"><img :src="computedThumbnail" :alt="`${title}のサムネイル`" /></div>
    <p :class="$style.date">
      <time :datetime="updatedAtDate.toISOString()">{{ updatedAtStr }}</time> 更新
    </p>
    <p :class="$style.title">{{ title }}</p>
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { formatDate } from '@/utils/date';

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: Object,
      default: null,
    } as PropOptions<{ url: string } | null>,
    updatedAt: {
      type: String,
      required: true,
    },
  },
  computed: {
    computedThumbnail(): string {
      const encodedTitle = encodeURIComponent(this.title);

      if (this.thumbnail !== null) {
        return `${this.thumbnail.url}?w=450&h=300&fit=crop`;
      }
      return `https://i.imgg.app/${process.env.IMGG_USER_ID}/${process.env.IMGG_IMAGE_ID}/jpg?title=${encodedTitle}`;
    },
    updatedAtDate(): Date {
      return new Date(this.updatedAt);
    },
    updatedAtStr(): string {
      return formatDate(this.updatedAtDate);
    },
  },
});
</script>

<style lang="scss" module>
.card {
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(#000, 0.2);
  color: inherit;
  display: block;
  overflow: hidden;
  text-decoration: none;
  width: 100%;
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(#000, 0.2);
  }
}

.thumbnail {
  position: relative;
  width: 100%;

  &::before {
    content: '';
    display: block;
    padding-top: 60%;
  }

  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
  }
}

.date {
  color: #999;
  font-size: 0.8rem;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  text-align: left;
}

.title {
  text-align: left;
  padding: 0 1rem 1rem;
  font-size: 1rem;
}
</style>
