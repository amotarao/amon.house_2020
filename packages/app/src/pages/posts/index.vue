<template>
  <post-list-page :posts="posts" />
</template>

<script lang="ts">
import Vue from 'vue';
import { AxiosError } from 'axios';
import PostListPage from '@/components/pages/PostListPage.vue';
import { Post } from '@/pages/posts/_id.vue';

type PickedPost = Pick<Post, 'id' | 'title' | 'thumbnail' | 'updatedAt'>;

export default Vue.extend({
  components: {
    PostListPage,
  },
  async asyncData({ $axios, query, error }): Promise<{ posts: PickedPost[] } | void> {
    const q = {
      draftKey: typeof query.draftKey === 'string' ? query.draftKey : null,
      limit: 20,
      fields: ['id', 'title', 'thumbnail', 'updatedAt'].join(','),
    };
    const qs = Object.entries(q)
      .filter((q): q is [string, string] => q[1] !== null)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');

    const url = `https://api.amon.house/v1/posts?${qs}`;

    const response = await $axios.get<{ contents: PickedPost[] }>(url).catch((error: AxiosError) => {
      if (error.response) {
        return { data: null, status: error.response.status };
      }
      return { data: null, status: 500 };
    });

    if (response.data === null) {
      error({ statusCode: response.status, message: '' });
      return;
    }

    return { posts: response.data.contents };
  },
});
</script>
