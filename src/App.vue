<script setup>
import { RouterLink, RouterView } from 'vue-router';
import TopMenu from './components/TopMenu.vue';
</script>

<template>
  <div class="container">
    <TopMenu />
    <RouterLink to="/" active-class="active"/>
    <RouterLink to="/productDetails" active-class="active" />
    <RouterView />
  </div>

</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style scoped>
</style>
