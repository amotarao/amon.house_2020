<template>
  <div :class="$style.container">
    <h1>あもんはうす</h1>
    <p>明らかに作り途中だと思う</p>
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
</template>

<script lang="ts">
import Vue from 'vue';
import BasicButton from '@/components/atoms/BasicButton.vue';

export default Vue.extend({
  components: {
    BasicButton,
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
});
</script>

<style lang="scss" module>
.container {
  font-family: 'Roboto';
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

.snsList,
.siteList {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0rem -0.5rem;
}

.snsItem,
.siteItem {
  margin: 0.5rem;
  text-align: left;
}
</style>
