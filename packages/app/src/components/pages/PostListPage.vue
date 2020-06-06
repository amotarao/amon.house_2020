<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title">記事一覧</h1>
    <ul :class="$style.postList">
      <li v-for="(item, i) in posts" :key="i" :class="$style.postItem">
        <post-card v-bind="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Post } from '@/pages/posts/_id.vue';
import PostCard from '@/components/molecules/PostCard.vue';

export default Vue.extend({
  components: {
    PostCard,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    } as PropOptions<Post[]>,
  },
});
</script>

<style lang="scss" module>
.wrapper {
  margin: auto;
  padding: 120px 16px;
  max-width: 100%;
  width: 752px;
}

.title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.postList {
  margin: 0 auto 2rem;
  width: 720px;
  max-width: 100%;
  list-style: none;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
  grid-gap: 1rem;
}

.postItem {
  margin: auto;
  height: 100%;
  width: 100%;
}
</style>
