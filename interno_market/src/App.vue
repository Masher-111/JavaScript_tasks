<template>
  <div id="app">
    <HeaderComp/>
    <ProductDetails/>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from './components/Header.vue';
import FooterComp from './components/Footer.vue';
import ProductDetails from './components/ProductDetails.vue';
export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
    ProductDetails
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost&display=swap');
#app {
  font-family: 'DM Serif Display', serif;
    font-family: 'Jost', sans-serif;



}
</style>
