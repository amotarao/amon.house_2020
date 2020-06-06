<template>
  <div :class="$style.container">
    <div :class="$style.inner">
      <h1 :class="$style.title">あもんはうす</h1>
      <section :class="$style.postSection">
        <ul :class="$style.postList">
          <li v-for="(item, i) in posts" :key="i" :class="$style.postItem">
            <post-card v-bind="item" />
          </li>
        </ul>
        <basic-button to="/posts" data-type="site" data-size="small">記事一覧</basic-button>
      </section>
      <ul :class="$style.snsList">
        <li v-for="(item, i) in snsItems" :key="i" :class="$style.snsItem">
          <basic-button :href="item.url" :data-type="item.type">{{ item.name }}</basic-button>
        </li>
      </ul>
      <ul :class="$style.siteList">
        <li v-for="(item, i) in siteItems" :key="i" :class="$style.siteItem">
          <basic-button :href="item.url" data-type="site" data-size="small">{{ item.name }}</basic-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { AxiosError } from 'axios';
import PostCard from '@/components/molecules/PostCard.vue';
import BasicButton from '@/components/atoms/BasicButton.vue';
import { Post } from '@/pages/posts/_id.vue';

type PickedPost = Pick<Post, 'id' | 'title' | 'thumbnail' | 'updatedAt'>;

export default Vue.extend({
  components: {
    PostCard,
    BasicButton,
  },
  async asyncData({ $axios, query, error }): Promise<{ posts: PickedPost[] } | void> {
    const q = {
      draftKey: typeof query.draftKey === 'string' ? query.draftKey : null,
      limit: 3,
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
  data() {
    return {
      snsItems: [
        {
          name: 'Twitter',
          type: 'twitter',
          url: 'https://twitter.com/amotarao',
        },
        {
          name: 'GitHub',
          type: 'github',
          url: 'https://github.com/amotarao',
        },
      ],
      siteItems: [
        {
          name: 'ゆくくる',
          url: 'https://yukukuru.app',
        },
        {
          name: '東京メトロ、遅れてる？',
          url: 'https://metro.chikoku.net',
        },
      ],
    };
  },
  computed: {
    canonicalUrl(): string {
      return `https://amon.house/`;
    },
  },
  head() {
    const canonicalUrl = (this as any).canonicalUrl as string;

    return {
      link: [{ hid: 'canonical', rel: 'canonical', href: canonicalUrl }],
    };
  },
});
</script>

<style lang="scss" module>
.container {
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.inner {
  min-height: fit-content;
  max-width: 100%;
}

.title {
  margin-bottom: 2rem;
}

.postSection {
  margin: 0 auto 2rem;
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

.snsList,
.siteList {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0 -0.5rem;
}

.snsItem,
.siteItem {
  margin: 0.5rem;
  text-align: left;
}
</style>
