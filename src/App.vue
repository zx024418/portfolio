<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <header>
      <div class="main-logo">
        <img src="/src/assets/images/logo.png" alt="digidev">
      </div>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <!-- <li><RouterLink to="/test">Test</RouterLink></li> -->
      </ul>
    </header>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

header {
  display: flex;
  justify-content: space-between;
  min-height: 80px;
  align-items: center;
  font-family: var(--priFont);
}
.main-logo img {
    width: 100%;
    max-width: 180px;
}

header ul {
  display: flex;
  justify-content: center;
  gap: 40px;
}

header ul li {
  list-style: none;
}

header ul li a {
  text-decoration: none;

}
</style>
