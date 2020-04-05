<template>
  <div :class="$style.container">
    <h1>Amon Sawamura</h1>
    <p>明らかに作り途中だと思う</p>
    <ul :class="$style.snsList">
      <li :class="$style.snsItem">
        <a :class="$style.snsLink" class="twitter" href="https://twitter.com/amotarao" target="_blank" rel="noopener">
          Twitter
        </a>
      </li>
      <li :class="$style.snsItem">
        <a :class="$style.snsLink" class="github" href="https://github.com/amotarao" target="_blank" rel="noopener">
          GitHub
        </a>
      </li>
    </ul>
    <ul :class="$style.siteList">
      <li :class="$style.siteItem">
        <a :class="$style.siteLink" class="site" href="https://yukukuru.app" target="_blank" rel="noopener">ゆくくる</a>
      </li>
      <li :class="$style.siteItem">
        <a :class="$style.siteLink" class="site" href="https://metro.chikoku.net" target="_blank" rel="noopener">
          東京メトロ、遅れてる？
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" module>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > * {
    margin-bottom: 1rem;
  }
}

.container .snsList,
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

.snsLink,
.siteLink {
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

  &[class~='twitter'] {
    $base-color: rgb(29, 161, 242);
    $sub-color: #fff;

    border-color: $base-color;
    background-image: linear-gradient(150deg, $base-color 50%, $sub-color 50%);
    color: $sub-color;

    &:hover {
      color: $base-color;
    }
  }

  &[class~='github'] {
    $base-color: #24292e;
    $sub-color: #fff;

    border-color: $base-color;
    background-image: linear-gradient(150deg, $base-color 50%, $sub-color 50%);
    color: $sub-color;

    &:hover {
      color: $base-color;
    }
  }

  &[class~='site'] {
    $base-color: #4caf50;
    $sub-color: #fff;

    border-color: $base-color;
    background-image: linear-gradient(150deg, $base-color 50%, $sub-color 50%);
    color: $sub-color;

    &:hover {
      color: $base-color;
    }
  }
}

.siteLink {
  font-size: 1rem;
}
</style>
