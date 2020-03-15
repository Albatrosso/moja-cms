<template>
  <ul class="menu-list">
    <li class="menu-list__item">
      <router-link class="menu-list__link" to="/news-overview">Обзор новостей</router-link>
    </li>
    <li class="menu-list__item">
      <router-link class="menu-list__link" to="/dash-board">Создать новость</router-link>
    </li>
  </ul>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

  @Component
export default class NewsMenu extends Vue {}
</script>

<style scoped>

</style>
