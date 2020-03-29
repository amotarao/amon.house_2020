<template>
  <div class="container">
    <h1>Amon Sawamura</h1>
    <p>明らかに作り途中だと思う</p>
    <ul :class="$style.list">
      <li>
        <a href="https://twitter.com/amotarao" target="_blank" rel="noopener">Twitter</a>
      </li>
      <li>
        <a href="https://github.com/amotarao" target="_blank" rel="noopener">GitHub</a>
      </li>
    </ul>
    <ul :class="$style.list">
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container > * {
  margin-bottom: 2rem;
}
</style>

<style module>
.list {
  text-align: left;
}
.list li {
  text-align: left;
}
</style>
