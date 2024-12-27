<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <header>
      <h2><RouterLink to="/">ArjayDesign</RouterLink></h2>
      <ul>
        <li><RouterLink to="/about">About Me</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
        <!-- <li><RouterLink to="/test">Test</RouterLink></li> -->
      </ul>
    </header>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">

    header {
      background: var(--navyBlue);
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 24px;
        color: var(--white);
        font-family: var(--secFont);
        text-decoration: none;
      }

      ul {
        display: flex;
        justify-content: center;
        gap: 50px;
        align-items: center;
        min-height: 95px;

        li {
          list-style: none;
          color: var(--white);
        }

        a {
          text-decoration: none;
          color: var(--white);
          font-family: var(--priFont);
          font-weight: 400;
        }
      }

      @media (max-width: 1280px) {
            padding: 0 20px;
      }
    }



</style>
