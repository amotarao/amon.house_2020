<template>
  <post-page v-bind="postData" />
</template>

<script lang="ts">
import Vue from 'vue';
import { AxiosError } from 'axios';
import PostPage from '@/components/pages/PostPage.vue';

export type Post = {
  title: string;
  introduction: string;
  body: string;
  thumbnail?: {
    url: string;
  };
  id: string;
  createdAt: string;
  updatedAt: string;
};

type PostData = {
  id: string;
  title: string;
  introduction: string;
  body: string;
  thumbnail: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export default Vue.extend({
  components: {
    PostPage,
  },
  async asyncData({ $axios, params, query, error }): Promise<{ post: Post } | void> {
    const q = {
      draftKey: typeof query.draftKey === 'string' ? query.draftKey : null,
    };
    const qs = Object.entries(q)
      .filter((q): q is [string, string] => q[1] !== null)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');

    const url = `https://${process.env.MICRO_CMS_SERVICE_ID}.microcms.io/api/v1/posts/${params.id}?${qs}`;

    const response = await $axios
      .get<Post>(url, {
        headers: {
          'X-API-KEY': process.env.MICRO_CMS_API_KEY,
        },
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          return { data: null, status: error.response.status };
        }
        return { data: null, status: 500 };
      });

    if (response.data === null) {
      error({ statusCode: response.status, message: '' });
      return;
    }

    return { post: response.data };
  },
  computed: {
    postData(): PostData {
      const post = (this as any).post as Post;

      return {
        id: post.id,
        title: post.title,
        introduction: post.introduction,
        body: post.body,
        thumbnail: 'thumbnail' in post && post.thumbnail ? post.thumbnail.url : null,
        createdAt: new Date(post.createdAt),
        updatedAt: new Date(post.updatedAt),
      };
    },
    canonicalUrl(): string {
      return `https://amon.house/posts/${this.$route.params.id}`;
    },
  },
  head() {
    const postData = (this as any).postData as PostData;
    const canonicalUrl = (this as any).canonicalUrl as string;
    const encodedTitle = encodeURIComponent(postData.title);
    const thumbnail = postData.thumbnail
      ? `${postData.thumbnail}?w=1200&h=630&fit=crop`
      : `https://i.imgg.app/amon/amon-house/jpg?title=${encodedTitle}`;

    return {
      title: postData.title,
      link: [{ hid: 'canonical', rel: 'canonical', href: canonicalUrl }],
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: canonicalUrl },
        { hid: 'og:title', property: 'og:title', content: postData.title },
        { hid: 'og:description', property: 'og:description', content: postData.introduction },
        { hid: 'og:image', property: 'og:image', content: thumbnail },
        { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
        { hid: 'og:image:height', property: 'og:image:height', content: '630' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'og:image': ['content'],
      },
    };
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

.contents {
  font-size: 16px;
  line-height: 1.7;

  > * + * {
    margin-top: 24px;
  }
}
</style>
