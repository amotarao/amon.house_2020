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
    <footer :class="$style.footer">
      <a
        :class="$style.share"
        :href="tweetUrl"
        target="_blank"
        rel="noopener"
        aria-label="ツイートする"
        data-type="twitter"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="400" width="400" viewBox="0 0 400 400">
          <path fill="none" d="M0 0h400v400H0z" />
          <path
            d="M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 00325 122.47a102.38 102.38 0 01-29.46 8.07 51.47 51.47 0 0022.55-28.37 102.79 102.79 0 01-32.57 12.45 51.34 51.34 0 00-87.41 46.78A145.62 145.62 0 0192.4 107.81a51.33 51.33 0 0015.88 68.47A50.91 50.91 0 0185 169.86v.65a51.31 51.31 0 0041.15 50.28 51.21 51.21 0 01-23.16.88 51.35 51.35 0 0047.92 35.62 102.92 102.92 0 01-63.7 22 104.41 104.41 0 01-12.21-.74 145.21 145.21 0 0078.62 23"
          />
        </svg>
      </a>
      <button v-if="isSupportedShare" :class="$style.share" aria-label="シェアする" data-type="shareapi" @click="share">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
          />
        </svg>
      </button>
    </footer>
  </article>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { formatDate } from '@/utils/date';

export default Vue.extend({
  inheritAttrs: false,
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
    url: {
      type: String,
      required: true,
    },
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
    tweetUrl(): string {
      const url = encodeURIComponent(this.url);
      return `https://twitter.com/intent/tweet?url=${url}&via=amotarao`;
    },
    isSupportedShare(): Boolean {
      if (typeof window === 'undefined') {
        return false;
      }
      return 'share' in window.navigator;
    },
  },
  methods: {
    async share() {
      await (window.navigator as any).share({
        title: this.title,
        url: this.url,
      });
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

.footer {
  margin-top: 4rem;
  display: flex;
}

.share {
  @include button-base;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $bg2;
  border-radius: 4px;
  color: $text;
  height: 48px;
  width: 48px;
  margin-right: 1rem;

  svg {
    fill: currentColor;
  }

  &[data-type='twitter'] {
    background: $twitter;

    svg {
      fill: #fff;
      height: 30px;
      width: 30px;
    }
  }
}
</style>
