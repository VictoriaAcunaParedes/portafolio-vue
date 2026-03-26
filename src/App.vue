<template>
  <AppNavbar />
  <main class="main-content">
    <router-view />
  </main>
  <AppFooter />
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>


<style scoped>
.main-content {
  padding-top: 80px;
}

</style>
