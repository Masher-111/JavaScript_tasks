<template>
  <div id="app">
    <SortingComp/>
    <ArticlesComp/>

  </div>
</template>

<script>

import ArticlesComp from './components/articlesComp.vue';
import SortingComp from './components/sortingComp.vue';
export default {
  name: 'App',
  components: {
    ArticlesComp,
    SortingComp
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
