<template>
  <div class="container">
    <h1>Amon Sawamura</h1>
    <p>明らかに作り途中だと思う</p>
    <ul>
      <li>
        <a href="https://twitter.com/amotarao" target="_blank" rel="noopener">Twitter</a>
      </li>
      <li>
        <a href="https://github.com/amotarao" target="_blank" rel="noopener">GitHub</a>
      </li>
      <li>
        <a href="https://yukukuru.app" target="_blank" rel="noopener">ゆくくる</a>
      </li>
      <li>
        <a href="https://metro.chikoku.net" target="_blank" rel="noopener">東京メトロ、遅れてる？</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
